import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserIcon from '../images/user-icon.png';
import '../styles/Contact.scss';

const Reviews = ({ reviews }) => {
  const reviewsContainerRef = useRef(null);

  // Function to generate a string of stars based on the rating
  const generateStars = (rating) => {
    const starSymbols = '★★★★★';
    return starSymbols.slice(0, rating);
  };

  useEffect(() => {
    // Scroll to the top of the reviews container when reviews change
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollTop = 0;
    }
  }, [reviews]);

  return (
    <div ref={reviewsContainerRef} className="reviews-container">
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <img
              className='user-image'
              src={review.user_image ? review.user_image : UserIcon}
              alt="profile"
            />
            <p className='review-comment'>"{review.comment}"</p>
            <p className='submitted-review-stars'>{generateStars(review.rating)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Reviews;
