import React from 'react';
import '../styles/Contact.scss';

const Reviews = ({ reviews }) => {
  // Combine the mock reviews with the reviews from props
  const allReviews = [
    // Add more mock reviews here if needed
    {
      id: 1,
      rating: 5,
      comment: 'Great food and service!',
    },
    {
      id: 2,
      rating: 4,
      comment: 'Good place, loved the pho!',
    },
    ...reviews, // Include reviews from props
  ];

  // Reverse the order of all reviews
  const reversedReviews = [...allReviews].reverse();

  // Function to generate a string of stars based on the rating
  const generateStars = (rating) => {
    const starSymbols = '★★★★★'; // Unicode stars
    return starSymbols.slice(0, rating);
  };

  return (
    <div className='customer-review'>
      <ul>
        {reversedReviews.map((review) => (
          <li key={review.id}>
            <p>"{review.comment}"</p> &nbsp;
            {review.rating > 1 ? (
              <p>{generateStars(review.rating)} {review.rating} stars</p>
            ) : (
              <p>{generateStars(review.rating)} {review.rating} star</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
