const mongoose = require('mongoose');
const drinkSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Drinks', drinkSchema,'drink_data');
