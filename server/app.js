const express = require('express');
const mountRoutes = require('./routes')

const app = express();

const port = 8080; //process.env.PORT ||

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

mountRoutes(app)
// **** APP listener ****
app.listen(port, () => {
  console.log(`Nodejs server running on port ${port}.`);
});
