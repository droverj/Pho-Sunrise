import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';
import ReviewInteractionMessage from './ReviewInteractionMessage';
import ThaiBasilPlates from '../images/Thai-Basil-Plates.jpeg';
import InstagramIcon from '../images/Instagram_Glyph_Gradient.png';
import FacebookIcon from '../images/Facebook_Logo_Primary.png';
import Building from '../images/thai-basil-building.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.scss';

const Contact = ({ reviews, userId, updateReviews }) => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState(null);
  // eslint-disable-next-line
  const [reviewDeleted, setReviewDeleted] = useState(false);
  const [dropdownDisplay, setDropdownDisplay] = useState('none');
  const [displayReviews, setDisplayReviews] = useState(false);

  // Checks if the user has submitted a review after page refresh
  useEffect(() => {
    const userHasSubmittedReview = reviews.some((review) => review.user_id === userId);
    setReviewSubmitted(userHasSubmittedReview);
  }, [reviews, userId]);

  const toggleReviews = () => {
    if (displayReviews) {
      setDropdownDisplay('none');
    } else {
      setDropdownDisplay('flex');
    }
    setDisplayReviews(!displayReviews);
  };

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

  return (
    <div className="contact">

      <Link to="/menu">
        <button className="menu">
          Menu
        </button>
      </Link>

      <div className="socials-container">
        <p className='website-url'>thaibasil.ca</p>
        <div className='social-icons'>
          <p className='connect'>connect with us</p>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram Icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
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
          <p className='info'>(999) 999 - 9999</p>
        </div>
        <div className='restaurant-info'>
          <p className='label'>Email:</p>
          <p className='info'>info@thaibasil.ca</p>
        </div>
        <div className='restaurant-info'>
          <p className='label'>Address:</p>
          <p className='info'>
            1400 Ottawa Street South <br />
            Kitchener, ON, Canada <br />
            N2E 4E2
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
        <img src={Building} className='building-img' alt="Thai Basil Building" />
        <iframe title="google-maps-pho-sunrise" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.143805010259!2d-80.51546618411915!3d43.41582207913015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf597d52d08d5%3A0x1669b8de11730844!2s1400+Ottawa+St+S%2C+Kitchener%2C+ON+N2E+4E2%2C+Canada!5e0!3m2!1sen!2sru!4v1490866950787"></iframe>
      </div>

      {/* <div className='reviews-heading-container'> */}
        <div className='reviews-heading'>
          See what our guests are saying
        <button className='reviews-toggle' onClick={toggleReviews}>
          {displayReviews ? (
            <>
              <FontAwesomeIcon icon={faCaretUp} className="caret-icon" style={{ color: '#3c4755' }} size="2x" />
              hide
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faCaretDown} className="caret-icon" style={{ color: '#3c4755' }} size="2x" />
              show
            </>
          )}
        </button>
        </div>
      {/* </div> */}
      <Reviews reviews={reviews} dropdownDisplay={dropdownDisplay} />

      {reviewSubmitted ? (
        <ReviewInteractionMessage
          reviews={reviews}
          userId={userId}
          deleteConfirmed={deleteConfirmed}
          reviewSubmitted={reviewSubmitted}
          setDeleteConfirmed={setDeleteConfirmed}
          handleDeleteReview={handleDeleteReview}
        />
      ) : (
        isAuthenticated ? (
          <div>
            <h2 className='review-form-heading'>Tell us about your experience</h2>
            <ReviewForm onSubmit={handleReviewSubmit} />
          </div>
        ) : (
          <div className='logged-out-review-form'>
            <h2 className='review-form-heading'>
              <button className='review-sign-in' onClick={() => loginWithRedirect()}>Sign In</button>
              To Leave a Review
            </h2>
            <p>We welcome and appreciate your feedback.</p>
          </div>
        )
      )}

      <div className='reservation'>
        <h3>Call to book your reservation</h3>
        <img src={ThaiBasilPlates} className='plates-img' alt="Thai Basil Plates" />
      </div>
    </div>
  );
}

export default Contact;