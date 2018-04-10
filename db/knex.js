const ENVIRONMENT = process.env.NODE_ENV || 'development';
const CONFIG = require('../knexfile')[ENVIRONMENT];
module.exports = require('knex')(CONFIG);