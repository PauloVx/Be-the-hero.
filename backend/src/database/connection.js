const knex = require('knex');

const dbConfig = require('../../knexfile');

const connection = knex(dbConfig.development);
module.exports = connection;