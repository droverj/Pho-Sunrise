import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import StarRating from './StarRating';
import '../styles/Contact.scss';


const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [validationError, setValidationError] = useState('');

  const { isAuthenticated } = useAuth0();

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

    if (!isAuthenticated) {
      setValidationError('Please sign in to leave a review. Thank you!');
      return;
    }  

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
    <div className='review-form'>
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
            maxLength= "140"
          />
        </div>
        {validationError && <p className="validation-error">{validationError}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
