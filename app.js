const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const bodyParser = require('body-parser');
// const morgan = require('morgan');

app.listen(port, () => {
  console.log('Listening on port', port);
})

module.exports = {
  app
}