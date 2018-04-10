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

module.exports = router;