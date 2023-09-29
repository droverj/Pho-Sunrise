import React from 'react';
import '../styles/Contact.scss';

const Reviews = ({ reviews }) => {

  // Combine the mock reviews with the reviews from props
  const allReviews = [
    // Add more mock reviews here if needed
    {
      id: 1,
      rating: 5,
      comment: 'Great food and service! -R ',
    },
    {
      id: 2,
      rating: 4,
      comment: 'Good place, loved the pho! - R',
    },
    ...reviews, // Include reviews from props
  ];

  // Reverse the order of all reviews
  const reversedReviews = [...allReviews].reverse();

  return (
    <div className='customer-review'>
      <ul>
        {reversedReviews.map((review) => (
          <li key={review.id}>
            <p>"{review.comment}"</p>
            <p>{review.rating} stars</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
