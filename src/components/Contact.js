import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';
import PhoSunrisePlates from '../images/Pho-Sunrise-Plates.jpeg';
import InstagramIcon from '../images/Instagram_Glyph_Gradient.png';
import FacebookIcon from '../images/Facebook_Logo_Primary.png';
import Building from '../images/pho-sunrise-building.jpeg';
import '../styles/Contact.scss';

const Contact = ({ reviews, userId, updateReviews }) => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState(null);
  // eslint-disable-next-line
  const [reviewDeleted, setReviewDeleted] = useState(false);

  useEffect(() => {
    const userHasSubmittedReview = reviews.some((review) => review.user_id === userId);
    setReviewSubmitted(userHasSubmittedReview);
  }, [reviews, userId]);

  const handleReviewSubmit = async (newReview) => {
    try {
      const { rating, comment } = newReview;

      await axios.post('http://localhost:8080/api/reviews', {
        user_id: userId,
        user_image: user.picture,
        rating,
        comment,
      });

      setReviewSubmitted(true);
      setReviewDeleted(false);
      updateReviews();
      console.log('Review submitted successfully');
    } catch (error) {
      console.error('Error submitting review:', error);
      if (error.response && error.response.data) {
        console.error('Server error:', error.response.data);
      }
    }
  };

  const handleDeleteReview = async (review) => {
    try {
      await axios.delete(`http://localhost:8080/api/reviews/${review.id}`);

      updateReviews();
      setDeleteConfirmed(null);
      setReviewDeleted(true);
      console.log('Review deleted successfully');
    } catch (error) {
      console.error('Error deleting review:', error);
      if (error.response && error.response.data) {
        console.error('Server error:', error.response.data);
      }
    }
  };

  const renderReviewForm = () => {
    return (
      <div>
        <h2 className='review-form-heading'>Tell us about your experience</h2>
        <ReviewForm onSubmit={handleReviewSubmit} />
      </div>
    );
  };

  const renderLoggedOutReviewForm = () => {
    return (
      <div className='logged-out-review-form'>
        <h2 className='review-form-heading'>
          <button className='review-sign-in' onClick={() => loginWithRedirect()}>Sign In</button>
          To Leave a Review
        </h2>
        <p>We welcome and appreciate your feedback.</p>
      </div>
    );
  };

  const renderReviewInteractionMessage = () => {
    return (
      <div>
        {deleteConfirmed ? (
          reviews.map((review) => (
            review.user_id === userId && (
              <div key={review.id} className='delete-review-confirmation'>
                <h3>Are you sure you want to delete your Phở Sunrise review?</h3>
                <p>You rated Phở Sunrise {review.rating}/5 stars.</p>
                <p>"{review.comment}"</p>
                <div className='confirmation'>
                  <p>Delete your review?</p>
                  <p className='warning'>This action is final.</p>
                </div>
                <button onClick={() => setDeleteConfirmed(null)}>Return</button>
                <button className="danger-button" onClick={() => handleDeleteReview(review)}>Delete</button>
              </div>
            )
          ))
        ) : (
          <>
            <div className='submitted-review'>
              {reviewSubmitted ? 'Your Phở Sunrise review has been submitted successfully.' : null}
              <br /><span>Thank you</span>
              {!deleteConfirmed && (
                <div className='delete-review'>
                  <p>Delete your review?</p>
                  <button onClick={() => setDeleteConfirmed(true)}>Delete</button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="contact">

      <Link to="/menu">
        <button className="menu">
          Menu
        </button>
      </Link>

      <div className="socials-container">
        <p className='website-url'>phosunrise.ca</p>
        <div className='social-icons'>
          <p className='connect'>Connect With Us</p>
          <a href="https://www.instagram.com/explore/locations/268429957/pho-sunrise-vietnamese-cuisine/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram Icon" />
          </a>
          <a href="https://www.facebook.com/phosunrise.ca/" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook Icon" />
          </a>
        </div>
      </div>

      <div className='restaurant-info-container'>
        <div className='heading-container'>
          <h4 className='restaurant-info-heading'>Contact</h4>
        </div>

        <div className='restaurant-info'>
          <p className='label'>Phone:</p>
          <p className='info'>(519) 579 - 2016</p>
        </div>
        <div className='restaurant-info'>
          <p className='label'>Address:</p>
          <p className='info'>
            1400 Ottawa Street South -Unit B22 <br />
            Kitchener, ON, Canada &nbsp; N2E 4E2
          </p>
        </div>

        <div className='heading-container'>
          <h4 className='restaurant-info-heading'>Hours</h4>
        </div>

        <div className='restaurant-info'>
          <p className='label'>Sunday:</p>
          <p className='info'>11:00AM - 8:00PM</p>
        </div>
        <div className='restaurant-info'>
          <p className='label'>Monday:</p>
          <p className='info' id='monday'>CLOSED</p>
        </div>
        <div className='restaurant-info'>
          <p className='label'>Tuesday:</p>
          <p className='info'>11:00AM - 8:00PM</p>
        </div>
        <div className='restaurant-info'>
          <p className='label'>Wednesday:</p>
          <p className='info'>11:00AM - 8:00PM</p>
        </div>
        <div className='restaurant-info'>
          <p className='label'>Thursday:</p>
          <p className='info'>11:00AM - 8:00PM</p>
        </div>
        <div className='restaurant-info'>
          <p className='label'>Friday:</p>
          <p className='info'>11:00AM - 9:00PM</p>
        </div>
        <div className='restaurant-info'>
          <p className='label'>Saturday:</p>
          <p className='info'>11:00AM - 9:00PM</p>
        </div>
      </div>

      <div className='right-side-contact-body'>
      </div>


      <h2 className='shopping-centre'>Located in the Sunrise Shopping Centre</h2>
      <div className='location-images'>
        <img src={Building} className='building-img' alt="Pho Sunrise Plates" />
        <iframe title="google-maps-pho-sunrise" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.143805010259!2d-80.51546618411915!3d43.41582207913015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf597d52d08d5%3A0x1669b8de11730844!2s1400+Ottawa+St+S%2C+Kitchener%2C+ON+N2E+4E2%2C+Canada!5e0!3m2!1sen!2sru!4v1490866950787"></iframe>
      </div>

      <h2 className='reviews-heading'>See what our guests are saying</h2>
      {/* <div className='reviews-container'> */}
        <Reviews reviews={reviews} />
      {/* </div> */}
      {reviewSubmitted ? renderReviewInteractionMessage() : (isAuthenticated ? renderReviewForm() : renderLoggedOutReviewForm())}

      <div className='reservation'>
        <h3>Call to book your reservation</h3>
        <img src={PhoSunrisePlates} className='plates-img' alt="Pho Sunrise Plates" />
      </div>
    </div>
  );
}

export default Contact;