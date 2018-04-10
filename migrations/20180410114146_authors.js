
exports.up = function(knex, Promise) {
  return createAuthors()
  .then(createBooks)

  function createAuthors(){
    return knex.schema.createTable('authors', function(table){
      table.increments();
      table.string('name');
      table.integer('age');
    })
  }

  function createBooks(){
    return knex.schema.createTable('books', function(table){
      table.increments();
      table.string('title');
      table.string('author_id')
    })
  }
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("authors"), knex.schema.dropTable("books")]);
};
