const Router = require('express-promise-router')

const db = require('../db')
// same API as the normal express router except allows you to use async functions as route handlers
const router = new Router()


// GET STATUS
router.get('/', (req, res) => {
    console.log("It came from here!!!")
    res.json({ info: 'Node.js, Express, and Postgres API' });
  });

// GET all users
// WORKING
router.get('/users', async (req, res) => {
    try {
        console.log(req)
        const { rows } = await db.query('SELECT * FROM users ORDER BY id ASC')
        res.status(200).send(rows)
    } catch (error) {
        res.status(500).send(error);
    }   
  });

  // GET user by id
  // WORKING
  router.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        res.status(200).send(rows)
    } catch (error) {
        res.status(500).send(error);
    }   
  });
  
  // POST a new user
  // WORKING
  router.post('/users', async (req, res) => {
    try {
        const { name, email } = req.body
        const { rows } = await db.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id', [name, email]);
        res.status(200).send(`User added with ID: ${rows[0].id}`);
    } catch (error) {
        res.status(500).send(error);
    }   
  });
  
  // PUT updated data in an existing user
  router.put('/users/:id', async (req, res) => {
      try {
        const { id } = req.params
        const { name, email } = req.body
        const { rows } = await db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id])
        res.status(200).send(`User modified with ID: ${rows[0].id}`)
      } catch (error) {
        res.status(500).send(error);
      }
  })
  
  // DELETE a user
  // WORKING
  router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { rows } = await db.query('DELETE FROM users WHERE id = $1', [id]);
        res.status(200).send(`User deleted with ID: ${rows[0].id}`);
    } catch (error) {
        res.status(500).send(error);
    }   
  })

  module.exports = router
