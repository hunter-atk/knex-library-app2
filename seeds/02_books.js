
exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('books').del(),

    // Inserts seed entries
    knex('books').insert({ title: 'Gone With The Wind', author_id: 1 }),
    knex('books').insert({ title: 'Harry Potter', author_id: 2 }),
    knex('books').insert({ title: 'War and Peace', author_id: 3 })
  );
};
