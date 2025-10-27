import React, { useState } from 'react';
import '../style/feedback.css'; // Optional for styling
import { toast } from 'react-toastify'; // Optional if using toast notifications

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.feedback) {
      toast.error('Please fill out all required fields!');
      return;
    }

    console.log('Feedback submitted:', formData);
    toast.success('Thank you for your feedback!');

    // Reset the form
    setFormData({
      name: '',
      email: '',
      feedback: '',
      rating: '',
    });
  };

  return (
    <div className="feedback-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Rating:
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="">Select rating</option>
            <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
            <option value="4">⭐⭐⭐⭐ - Good</option>
            <option value="3">⭐⭐⭐ - Average</option>
            <option value="2">⭐⭐ - Poor</option>
            <option value="1">⭐ - Very Poor</option>
          </select>
        </label>

        <label>
          Feedback:
          <textarea
            name="feedback"
            placeholder="Share your thoughts..."
            rows="4"
            value={formData.feedback}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}
