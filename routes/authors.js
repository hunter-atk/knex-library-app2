const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const authors = [{ name: 'Stieg Larsson', age: 'dead' }];
    res.status(200).render('authors', { authors })
    //   .catch((err) => {
    //       next(err)});
  });

  module.exports = router;