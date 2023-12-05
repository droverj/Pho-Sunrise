import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../images/thai-basil-logo.png'
import '../../styles/Footer.scss';

function Footer() {

  return (
    <footer className='footer'>
      <div>
        <Link to="/" >
          <img src={Logo} className='home-icon' alt="Thai Basil Logo" />
        </Link>
      </div>
      <div className='content-container'>
        <div className="contact-container">
          <Link to="/contact">Contact Us <FontAwesomeIcon icon={faPhone} className="cart-icon" style={{ color: 'white' }} size="1x" /></Link>
          <p>thaibasil.ca</p>
        </div>
        <div className='notices-container'>
          <p>Some dishes may contain traces of shellfish or peanuts.</p>
          <p>Prices subject to change without notice.</p>
        </div>
        <div className='connect-container'>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', margin: '2px' }} size="2x" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} style={{ color: 'white', margin: '2px' }} size="2x" />
          </a>
          <p>connect</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
