const express = require('express');
const app = express();
const port = 8080; //process.env.PORT ||

const db = require('./queries');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers'
  );
  next();
});

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

// GET users
app.get('/users', (req, res) => {
  db.getUsers()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// GET user by id
app.get('/users/:id', (req, res) => {
  db.getUserById(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// POST new user
app.post('/users', (req, res) => {
  db.createUser(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// PUT update user
// Check for problems
app.put('/users/:id', (req, res) => {
  db.updateUser(req.body,req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

//DELETE user
app.delete('/users/:id', (req, res) => {
  db.deleteUser(req.params.id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// **** APP listener ****
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
