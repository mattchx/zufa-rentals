
const { Pool } = require('pg')
require('dotenv').config()


const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGHOST,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
  });

module.exports = {
  query: (text, params) => pool.query(text, params),
};


