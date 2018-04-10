const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const bodyParser = require('body-parser');
const morgan = require('morgan');

const authors = require('./routes/authors');

app.use(morgan('common'));
app.set('view engine', 'ejs');

app.use('/authors', authors);

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