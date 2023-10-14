import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import InstagramIcon from '../../images/Instagram_Glyph_Gradient.png';
import FacebookIcon from '../../images/Facebook_Logo_Primary.png';
import SteamingBowl from '../../images/steaming-bowl.png'
import '../../styles/Footer.scss';

function Footer() {

  return (
    <div className='footer'>
      <div>
        <Link to="/" >
          <img src={SteamingBowl} className='home-icon' alt="steaming bowl icon" />
        </Link>
      </div>
      <div className='content-container'>
        <div className="contact-container">
          <Link to="/contact">Contact Us <FontAwesomeIcon icon={faPhone} className="cart-icon" style={{ color: 'white' }} size="1x" /></Link>
          <p>phosunrise.ca</p>
        </div>
        <div className='connect-container'>
          <a href="https://www.instagram.com/explore/locations/268429957/pho-sunrise-vietnamese-cuisine/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram Icon" />
          </a>
          <a href="https://www.facebook.com/phosunrise.ca/" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook Icon" />
          </a>
          <p>connect</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
