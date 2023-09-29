import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';
import PhoSunrisePlates from '../images/Pho-Sunrise-Plates.jpeg';
import InstagramIcon from '../images/Instagram_Glyph_Gradient.png';
import FacebookIcon from '../images/Facebook_Logo_Primary.png';
import '../styles/Contact.scss';

const Contact = () => {
  const [allReviews, setAllReviews] = useState([]);


  const handleReviewSubmit = (newReview) => {
    // Create a unique ID for the new review (you can use a library like uuid)
    const newReviewWithId = { ...newReview, id: Date.now() };

    // Update the list of reviews by adding the new review
    setAllReviews([newReviewWithId, ...allReviews]);

    console.log('Submitted review data:', newReview);
  };

  return (
    <div className="contact">
      <div className='main-container'>

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
      <div className='map-and-reviews-container'>
        <div className='reviews-container'>
          <h2 className='review-form-subheadings'>Customer Reviews - C</h2>
          <Reviews reviews={allReviews} />
          <h2 className='review-form-subheadings'>Leave a Review - C </h2>
          <h3>Hover over the stars to rate, and click to submit your rating. - C </h3>
          <ReviewForm onSubmit={handleReviewSubmit} />
        </div>
        <iframe title="google-maps-pho-sunrise" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.143805010259!2d-80.51546618411915!3d43.41582207913015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf597d52d08d5%3A0x1669b8de11730844!2s1400+Ottawa+St+S%2C+Kitchener%2C+ON+N2E+4E2%2C+Canada!5e0!3m2!1sen!2sru!4v1490866950787"></iframe>
      </div>
    </div>
  );
}

export default Contact;