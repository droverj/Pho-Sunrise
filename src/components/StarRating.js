import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({ starCount, rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  // Determine the appropriate text based on the rating value
  // const getRatingText = () => {
  //   if (rating === 1) {
  //     return `You gave Phở Sunrise a ${rating} star rating. Please tell us more about your experience so we can improve.`;
  //   } else if (rating === 2) {
  //     return `You rated Phở Sunrise ${rating} stars. Please tell us more about your experience so we can improve.`;
  //   } else if (rating > 2) {
  //     return `You rated Phở Sunrise ${rating} stars! We are so pleased you enjoyed your experience with us.`;
  //   }
  //   return ''; 
  // };

  const getRatingText = () => {
    if (rating < 3) {
      return (
        <p>
          You gave Phở Sunrise a {rating} star rating. <br />
          Please tell us more about your experience so we can improve.
        </p>
      );
    } else if (rating > 2) {
      return (
        <p>
          You gave Phở Sunrise {rating} star rating! <br />
          We are pleased you enjoyed your experience with us.
        </p>
      );
    }
    return null; // Returning null when rating is 0 or undefined
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
