const express = require('express');
const router = express.Router();

const IceCream = require('../models/IceCreamModel');

router.get('/', async (req, res) => {
  try {
    const icecreamData = await IceCream.find();
    console.log(icecreamData);
    return res.status(200).json({ 
        success: true, data: icecreamData });
  } catch (err) {
    console.log('Error fetching in icecreame data');
   return res.status(500).json({ 
    success: false, error: 'Server error' });
  }
});
module.exports = router;
