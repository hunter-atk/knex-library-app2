
exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('categories_to_books').del(),

    // Inserts seed entries
    knex('categories_to_books').insert({ book_id: 1, category_id: 3 }),
    knex('categories_to_books').insert({ book_id: 2, category_id: 2 }),
    knex('categories_to_books').insert({ book_id: 3, category_id: 1 })
  )
}
