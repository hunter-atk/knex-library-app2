
exports.up = function(knex, Promise) {
  return createCategories();

  function createCategories() {
      return knex.schema.createTable('categories', function (table) {
          table.increments();
          table.string('name');
      })
  }
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categories');
};
