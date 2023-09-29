import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({ starCount, rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

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
      {rating > 0 && <p>You rated Phở Sunrise {rating} stars. -SR <br /> Please tell us more about your experience. -SR </p>
      }
    </div>
  );
};

export default StarRating;
