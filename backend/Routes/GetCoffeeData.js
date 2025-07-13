const express = require('express');
const router = express.Router();

const coffeeModel = require('../models/CoffeeModel');

router.get('/', async (req, res) => {
  try {
    const coffeedata = await coffeeModel.find();
    console.log(coffeedata);
    res.status(200).json({ success: true, coffeedata });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, error: 'server error in coffeedata' });
  }
});

module.exports = router;
