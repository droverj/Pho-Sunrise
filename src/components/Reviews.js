import React from 'react';
import '../styles/Contact.scss';

const Reviews = ({ reviews }) => {
  const allReviews = [
    // Mock Reviews
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
    {
      id: 3,
      rating: 1,
      comment: 'Absolutely mediocre.',
    },
    {
      id: 4,
      rating: 5,
      comment: 'This is a mock review with a 5 stars rating that is the max character limit in length. This review is being included for styling purposes :)',
    },
    {
      id: 5,
      rating: 1,
      comment: 'This is a mock review with a 1 star rating that is the max character limit in length. This review is being included for styling purposes. :)',
    },
    ...reviews, // Include reviews from props
  ];

  // Reverse the order of all reviews
  const reversedReviews = [...allReviews].reverse();

  // Function to generate a string of stars based on the rating
  const generateStars = (rating) => {
    const starSymbols = '★★★★★';
    return starSymbols.slice(0, rating);
  };

  return (
    <div>
      <ul>
        {reversedReviews.map((review) => (
          <li key={review.id}>
            <p>"{review.comment}"</p> &nbsp;
            <p className='submitted-review-stars'>{generateStars(review.rating)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
