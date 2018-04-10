
exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('categories').del(),

    // Inserts seed entries
    knex('categories').insert({ name: 'sci-fi' }),
    knex('categories').insert({ name: 'fantasy' }),
    knex('categories').insert({ name: 'thriller' })
  );
};
