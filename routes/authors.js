const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
    knex('authors')
        .select('*')
        .then((authors) => {
            res.status(200).render('authors', { authors })
        })
        .catch((err) => {
            next(err)
        });
});

router.get('/:id', (req, res, next) => {
    knex('books')
        .select('*').where('author_id', req.params.id)
        .then((books) => {
            res.status(200).render('books', { books })
        })
        .catch((err) => {
            next(err)
        });
});

router.delete('/:id', (req, res) => {
  knex('authors')
    .where('id', req.params.id)
    .del()
    .then(function (author){
      res.redirect('/authors')
    })
});

module.exports = router;
