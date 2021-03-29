const express = require('express');
const mountRoutes = require('./routes')

const app = express();

require('dotenv').config()

const port = process.env.PORT || 8080; 

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

mountRoutes(app)
// **** APP listener ****
app.listen(port, () => {
  console.log(`Nodejs server running on port ${port}.`);
});
