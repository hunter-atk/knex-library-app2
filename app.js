const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const bodyParser = require('body-parser');
const morgan = require('morgan');

const methodOverride = require('method-override');
const authors = require('./routes/authors');
const books = require('./routes/books');

app.use(morgan('common'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'))
app.set('view engine', 'ejs');

app.use('/authors', authors);
app.use('/authors/:author_id/books', books);

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
