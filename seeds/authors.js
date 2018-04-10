exports.seed = function (knex, Promise) {
  return Promise.all([
    knex('authors').del(),
    knex('authors').insert({ name: 'bob', age: 22 }),
    knex('authors').insert({ name: 'tom', age: 32 }),
    knex('authors').insert({ name: 'jane', age: 42 }),
  ]);
};
