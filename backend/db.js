const mongoose = require('mongoose');
require('dotenv').config(); //load variable from .env

const mongoURL = process.env.URL;

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log('Connect to the database!!');
  } catch (err) {
    console.log('Connection failed :' + err.message);
  }
};
module.exports = mongoDB;
