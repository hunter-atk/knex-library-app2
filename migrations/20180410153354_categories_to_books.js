
exports.up = function (knex, Promise) {
    return function createCategories() {
        return knex.schema.createTable('categories_to_books', function (table) {
            table.increments();
            table.integer('book_id');
            table.foreign('book_id').references('books.id').onDelete('CASCADE');
            table.integer('category_id');
            table.foreign('category_id').references('categories.id').onDelete('CASCADE');
        })
    }
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('categories_to_books');
};
