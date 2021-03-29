
const { Pool } = require('pg')
require('dotenv').config()


const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
});

pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
  });

module.exports = {
  query: (text, params) => pool.query(text, params),
};


