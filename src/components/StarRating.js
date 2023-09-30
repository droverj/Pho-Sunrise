import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({ starCount, rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  // Determine the appropriate text based on the rating value
  const getRatingText = () => {
    if (rating === 1) {
      return `You rated Phở Sunrise ${rating} star. Please tell us more about your experience so we can improve.`;
    } else if (rating === 2) {
      return `You rated Phở Sunrise ${rating} stars. Please tell us more about your experience so we can improve.`;
    } else if (rating > 2) {
      return `You rated Phở Sunrise ${rating} stars! We are so pleased you enjoyed your experience with us.`;
    }
    return ''; // Handle other cases as needed
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
      {rating > 0 && <p>{getRatingText()}</p>}
    </div>
  );
};

export default StarRating;
