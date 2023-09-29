import React, { useState } from 'react';
import StarRating from './StarRating';

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const maxCommentLength = 140;
  const [validationError, setValidationError] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    // Clear any previous validation error when a rating is selected.
    setValidationError('');
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    // Clear any previous validation error when a comment is entered.
    setValidationError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if both rating and comment are missing
    if (rating === 0 && comment.trim().length === 0) {
      setValidationError('Please select a rating and include a comment to submit your review. Thank you!');
      return;
    }

    // Check if only rating is missing
    if (rating === 0) {
      setValidationError('Please select a rating for your review. Thank you!');
      return;
    }

    // Check if only comment is missing
    if (comment.trim().length === 0) {
      setValidationError('Please include a comment to submit your review. Thank you!');
      return;
    }

    // Check if the comment length is within the limit
    if (comment.length > maxCommentLength) {
      setValidationError('Comment exceeds the maximum character limit (140 characters).');
      return;
    }

    // Here, you can submit the rating and comment to your backend or perform any desired action.
    // You can pass these values to the onSubmit prop function.

    // Clear the form fields and validation error after submission
    setRating(0);
    setComment('');
    setValidationError('');

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
            maxLength={maxCommentLength} // Limit the comment length
          />
        </div>
        {validationError && <p className="validation-error">{validationError}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
