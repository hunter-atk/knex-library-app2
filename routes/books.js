const express = require('express');
const router = express.Router({mergeParams: true});
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
    knex('books')
        .select('*')
        .then((books) => {
            res.status(200).render('books', { books, author: {id: req.params.author_id} })
        })
        .catch((err) => {
            next(err)
        });
});

router.get('/create', (req, res, next) => {
    res.status(200).render('bookscreate')
        .catch((err) => {
            next(err);
        });
});

router.get('/:id/edit', (req, res)=>{
  knex('books')
    .where('id', req.params.id)
    .first()
    .then(function (book) {
      res.render('booksedit', {book});
    });
});

router.put('/:id', (req, res) => {
  knex('books')
    .where('id', req.params.id)
       .update(req.body)
       .then(function (book){
         res.redirect('/books')
       })
});

router.delete('/:id', (req, res) => {
  knex('books')
    .where('id', req.params.id)
    .del()
    .then(function (book){
      res.redirect('/books')
    })
});

module.exports = router;
