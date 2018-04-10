const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const bodyParser = require('body-parser');
// const morgan = require('morgan');

app.get('/authors', (req, res, next) => {
  res.send('Authors Route')
    .catch(err => next(err));
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log('Listening on port', port);
})

module.exports = {
  app
}