const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: process.env.DB_PASSWORD,
  port: 5432,
})