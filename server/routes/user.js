const Router = require('express-promise-router')

const router = new Router()

module.exports = router

// GET all users
// WORKING
const getUsers = () => {
    return new Promise(function (resolve, reject) {
      pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      });
    });
  };
  
  // GET user by id
  // WORKING
  const getUserById = (id) => {
    return new Promise(function (resolve, reject) {
      pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      });
    });
  };
  
  // POST a new user
  // WORKING
  const createUser = (body) => {
    return new Promise(function (resolve, reject) {
      const { name, email } = body;
      pool.query(
        'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id',
        [name, email],
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(`User added with ID: ${result.rows[0].id}`);
        }
      );
    });
  };
  
  // PUT updated data in an existing user
  const updateUser = (body, id) => {
    return new Promise(function (resolve, reject) {
      const { name, email } = body;
  
      pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
          if (error) {
            reject(error);
          }
          resolve(`User modified with ID: ${result.rows[0].id}`);
        }
      );
    });
  };
  
  // DELETE a user
  // WORKING
  const deleteUser = (id) => {
    return new Promise(function (resolve, reject) {
      pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`User deleted with ID: ${id}`);
      });
    });
  };
  
  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };
  