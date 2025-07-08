const mongoose = require('mongoose');
const iceCreameSchema = mongoose.Schema({
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
module.exports = mongoose.model('IceCreame', iceCreameSchema, 'icecream_data');
