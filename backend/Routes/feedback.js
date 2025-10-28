const express = require('express');
const router = express.Router();
const FeedbackModel = require('../models/FeedbackModel');

// ✅ GET all feedbacks
router.get('/', async (req, res) => {
  try {
    const feedbackData = await FeedbackModel.find();

    if (!feedbackData || feedbackData.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No feedbacks found',
      });
    }

    return res.status(200).json({
      success: true,
      count: feedbackData.length, // optional: show number of feedbacks
      data: feedbackData,
    });
  } catch (err) {
    console.error('Error fetching feedbacks:', err.message);
    return res.status(500).json({
      success: false,
      error: 'Server error fetching feedback',
    });
  }
});

// ✅ POST new feedback
router.post('/', async (req, res) => {
  try {
    const { name, email, rating, feedback } = req.body;

    // Basic validation
    if (!name || !email || !rating || !feedback) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required',
      });
    }

    // Create and save feedback
    const newFeedback = new FeedbackModel({ name, email, rating, feedback });
    await newFeedback.save();

    return res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully',
      data: newFeedback, // optional: send back the saved feedback
    });
  } catch (err) {
    console.error('Error saving feedback:', err.message);
    return res.status(500).json({
      success: false,
      error: 'Error saving feedback',
    });
  }
});

module.exports = router;
