const express = require('express');
const cors = require('cors');
const mongoDB = require('./db.js');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;
mongoDB();
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);
app.use(express.json());

app.listen(port, (req, res) => {
  console.log(`connect to ${port}`);
});

//app.use('/api/restaurant', require('./Routes/GetDrinksData.js'));
app.use('/api/drinkdata', require('./Routes/GetDrinksData.js'));
app.use('/api/icecream', require('./Routes/GetIceCreamData.js'));
app.use('/api/coffeedata', require('./Routes/GetCoffeeData.js'));
