const express = require('express');
const router = express.Router();

const feedback = require('../models/FeedbackModel');
const FeedbackModel = require('../models/FeedbackModel');

//get all feedbacks

router.get('/', async (req, res) => {
  try {
    const feedbackData = await FeedbackModel.find();
    res.status(200).json({
      success: true,
      data: feedbackData,
    });
  } catch (err) {}
  res.status(500).json({
    success: false,
    error: 'Server error fetching feedback',
  });
});

//To post the feed back
router.post('/', async (req, res) => {
  try {
    const { name, email, rating, feedback } = req.body;

    if (!name || !email || !rating || !feedback) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required',
      });
    }
    const newfeedback = new FeedbackModel({
      name,
      email,
      rating,
      feedback,
    });
    await newfeedback.save();
    res
      .status(201)
      .json({ success: true, message: 'Feedback submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Error saving feedback' });
  }
});

module.exports = router;
