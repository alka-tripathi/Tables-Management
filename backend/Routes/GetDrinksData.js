const express = require('express');
const router = express.Router();

const Drink = require('../models/DrinksModel');

router.get('/', async (req, res) => {
  try {
    const drinkdata = await Drink.find();
    console.log(drinkdata);
    res.status(200).json({ success: true, drinkdata });
  } catch (err) {
    console.log('Error Fetching data');
    res.status(500).json({ success: false, error: 'Server error' });
  }
});
module.exports = router;
