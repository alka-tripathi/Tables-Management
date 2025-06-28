const express = require('express');

const mongoDB = require('./db.js');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;
mongoDB();
app.use(express.json());

app.listen(port, (req, res) => {
  console.log(`connect to ${port}`);
});
