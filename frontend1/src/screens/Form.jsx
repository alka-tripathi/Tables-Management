import React, { useState } from 'react';
import '../style/feedback.css';
import { toast } from 'react-toastify';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.feedback ||
      !formData.rating
    ) {
      toast.error('Please fill out all required fields!');
      return;
    }

    try {
      // Send POST request to backend
      const response = await fetch('http://localhost:5000/api/feedback', {
        // 👈 Update this URL if needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Feedback submitted successfully!');
        console.log('Saved feedback:', data.data);

        // Reset form
        setFormData({
          name: '',
          email: '',
          feedback: '',
          rating: '',
        });
      } else {
        toast.error(data.error || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast.error('Server error. Please try again later.');
    }
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
