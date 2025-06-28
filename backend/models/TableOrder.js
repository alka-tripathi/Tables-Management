const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  qty: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
});

const tableOrderSchema = mongoose.Schema(
  {
    tableNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    coffee: itemSchema,
    drinks: itemSchema,
    iceCream: itemSchema,
    status: {
      type: String,
      enum: ['active', 'completed'],
      default: 'active',
    },

    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('TableOrder', tableOrderSchema);
