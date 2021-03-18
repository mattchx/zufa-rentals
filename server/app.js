const express = require('express');
const mountRoutes = require('./routes')

const app = express();
mountRoutes(app)
const port = 8080; //process.env.PORT ||

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// **** APP listener ****
app.listen(port, () => {
  console.log(`Nodejs server running on port ${port}.`);
});
