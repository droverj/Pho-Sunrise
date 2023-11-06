import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({ starCount, rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const getRatingText = () => {
    if (rating < 3) {
      return (
        <>
          <p>You gave Phở Sunrise a {rating} star rating.</p>
          <p>Please tell us more about your experience so we can improve.</p>
        </>
      );
    } else if (rating > 2) {
      return (
        <>
          <p>You gave Phở Sunrise a {rating} star rating!</p>
          <p>We are pleased you enjoyed your experience with us.</p>
        </>
      );
    }
    return null;
  };

  return (
    <div className='star-rating-container'>
      <div className="star-rating">
        {[...Array(starCount)].map((_, index) => (
          <Star
            key={index}
            position={index + 1}
            filled={index < (hoveredRating || rating)}
            onClick={() => onRatingChange(index + 1)}
            onMouseEnter={() => setHoveredRating(index + 1)}
            onMouseLeave={() => setHoveredRating(0)}
          />
        ))}
      </div>
      {rating > 0 && getRatingText()}
    </div>
  );
};

export default StarRating;
