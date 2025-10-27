const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  feedbacks: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const FeedbackModel = mongoose.model('Feedback', feedbackSchema);
module.exports = FeedbackModel;
