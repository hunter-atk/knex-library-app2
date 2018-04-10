
exports.up = function(knex, Promise) {
  return createAuthors()

  function createAuthors(){
  return knex.schema.createTable('authors', function(table){
    table.increments();
    table.string('name');
    table.integer('age');
  })
 }
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("authors")]);
};
