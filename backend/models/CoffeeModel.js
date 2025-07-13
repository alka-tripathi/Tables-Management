const mongoose = require('mongoose');
const coffeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['Hot', 'Cold'],
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Coffee', coffeeSchema,'coffee_data');
