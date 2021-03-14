const express = require('express');
const app = express();
const port = 8080; //process.env.PORT ||
const db = require('./queries')


app.use(express.json())
app.use(express.urlencoded({extended: true})); 

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


// **** APP listener ****
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
