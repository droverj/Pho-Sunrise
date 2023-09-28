import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({ starCount, rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div>
      <h2>Rate this restaurant</h2>
      <p>Hover over the stars to rate, and click to submit your rating.</p>

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

      {rating > 0 && <p>You rated this restaurant {rating} stars.</p>}
    </div>
  );
};

export default StarRating;
