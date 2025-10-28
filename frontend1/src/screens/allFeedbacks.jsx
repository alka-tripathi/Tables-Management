import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AllFeedback() {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5173/addfeedback') // 👈 your backend API endpoint
      .then((res) => {
        setFeedback(res.data.data); // Accessing "data" from response
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching feedback:', err);
        setError('Failed to load feedbacks');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading feedback...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Feedback</h2>
      {feedback.length === 0 ? (
        <p>No feedback found 😔</p>
      ) : (
        <ul>
          {feedback.map((f) => (
            <li key={f._id}>
              <b>{f.name}</b>: {f.feedback}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
