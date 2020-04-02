const knex = require('knex');

const dbConfig = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? dbConfig.test : dbConfig.development;

const connection = knex(config);

module.exports = connection;