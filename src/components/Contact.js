import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios'; 
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';
import PhoSunrisePlates from '../images/Pho-Sunrise-Plates.jpeg';
import InstagramIcon from '../images/Instagram_Glyph_Gradient.png';
import FacebookIcon from '../images/Facebook_Logo_Primary.png';
import Building from '../images/pho-sunrise-building.jpeg';
import '../styles/Contact.scss';

const Contact = ({ reviews, user }) => {
  // Check if the user object is not null before accessing its properties
  const userIdKey = user ? Object.keys(user)[0] : null; // user id
  const userId = userIdKey ? user[userIdKey] : null; // user object

  // console.log(userId);
  // console.log(userIdKey);

  const [allReviews, setAllReviews] = useState([]);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const { isAuthenticated, loginWithRedirect } = useAuth0();

const handleReviewSubmit = async (newReview) => {
  try {
    // Create a new review object with user_id, rating, and comment properties
    const reviewData = {
      user_id: userIdKey, // Replace with the actual user ID
      rating: newReview.rating,
      comment: newReview.comment,
    };

    // Make a POST request to your API endpoint to submit the review
    const response = await axios.post('http://localhost:8080/api/reviews', reviewData);

    // Check if the POST request was successful
    if (response.status === 200) {
      // Assuming the server responds with the newly created review data, you can update your state
      const createdReview = response.data;

      // Update the list of reviews by adding the new review to the front
      setAllReviews([createdReview, ...allReviews]);

      // Set the reviewSubmitted state to true to show the success message
      setReviewSubmitted(true);

      console.log('Submitted review data:', createdReview);
    } else {
      console.error('Failed to submit review.');
      // Handle the error (e.g., display an error message)
    }
  } catch (error) {
    console.error('Error submitting review:', error);
    // Handle any other errors that occur during the POST request
  }
};

  return (
    <div className="contact">

      <div className='information-container'>
        <div className='details-container'>
          <p className='contact-subheading'>Contact</p>
          <div className='details-subcontainer'>
            <ul className='details-label'>
              <li>Phone Number:</li>
              <li>Address:</li>
            </ul>
            <ul className='details'>
              <li>(519) 579 - 2016</li>
              <li>
                1400 Ottawa Street South - Unit B22 <br />
                Kitchener, ON, Canada <br />
                N2E 4E2
              </li>
            </ul>
          </div>
          <p className='contact-subheading'>Hours</p>
          <div className='details-subcontainer'>
            <ul className='details-label'>
              <li>Sunday:</li>
              <li>Monday:</li>
              <li>Tuesday:</li>
              <li>Wednesday:</li>
              <li>Thursday:</li>
              <li>Friday:</li>
              <li>Saturday:</li>
            </ul>
            <ul className='details'>
              <li>11:00AM - 8:00PM</li>
              <li>CLOSED</li>
              <li>11:00AM - 8:00PM</li>
              <li>11:00AM - 8:00PM</li>
              <li>11:00AM - 8:00PM</li>
              <li>11:00AM - 9:00PM</li>
              <li>11:00AM - 9:00PM</li>
            </ul>
          </div>
        </div>
        <div className='right-side-contact-body'>
          <p>Call to book your reservation</p>
          <img src={PhoSunrisePlates} className='plates-img' alt="Pho Sunrise Plates" />
          <div className="socials-container">
            <p className='website-url'>phosunrise.ca</p>
            <p>Connect With Us</p>
            <div className='social-icons'>
              <a href="https://www.instagram.com/explore/locations/268429957/pho-sunrise-vietnamese-cuisine/?hl=en" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram Icon" />
              </a>
              <a href="https://www.facebook.com/phosunrise.ca/" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Facebook Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <h2 className='shopping-centre'><b>Located in the Sunrise Shopping Centre</b></h2>
      <div className='location-images'>
        <img src={Building} className='building-img' alt="Pho Sunrise Plates" />
        <iframe title="google-maps-pho-sunrise" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.143805010259!2d-80.51546618411915!3d43.41582207913015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf597d52d08d5%3A0x1669b8de11730844!2s1400+Ottawa+St+S%2C+Kitchener%2C+ON+N2E+4E2%2C+Canada!5e0!3m2!1sen!2sru!4v1490866950787"></iframe>
      </div>

      <h2 className='reviews-heading'>What our guests are saying</h2>
      <div className='reviews-container'>
        <Reviews reviews={reviews} />
      </div>
      {reviewSubmitted ? (
        <div className='thank-you-message'>
          <p>Your Phở Sunrise review has been successfully submitted.<br /><span>Thank you</span></p>
        </div>
      ) : (
        isAuthenticated ? (
          <div>
            <h2 className='review-form-heading'>Tell us about your experience</h2>
            <ReviewForm onSubmit={handleReviewSubmit} />
          </div>
        ) : (
          <div className='logged-out-review-form'>
            <h2 className='review-form-heading'>
              <button className='review-sign-in' onClick={() => loginWithRedirect()}>Sign In</button>To Leave a Review
            </h2>
            <p>We welcome and appreciate your feedback.</p>
          </div>
        )
      )}
    </div>
  );
}

export default Contact;