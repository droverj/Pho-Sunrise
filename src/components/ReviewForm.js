import React, { useState } from 'react';
import StarRating from './StarRating';

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can submit the rating and comment to your backend or perform any desired action.
    // You can pass these values to the onSubmit prop function.

    // Clear the form fields after submission
    setRating(0);
    setComment('');

    // Call the onSubmit prop function with the rating and comment
    onSubmit({ rating, comment });
  };

  return (
    <div>
      <h2>Leave a Review</h2>
      <p>Hover over the stars to rate, and click to submit your rating.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <StarRating starCount={5} rating={rating} onRatingChange={handleRatingChange} />
        </div>
        <div>
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            rows="4"
            cols="50"
            placeholder="Write your review here..."
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
