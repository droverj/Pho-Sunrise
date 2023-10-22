import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CartTracker from '../CartTracker';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './Profile';
import SteamingBowl from '../../images/steaming-bowl.png'
import '../../styles/Navbar.scss';

function Navbar() {
  const { isAuthenticated } = useAuth0();

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav>
      <ul>
        <div className="fa-bars-icon" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faBars} className="bars-icon" style={{ color: 'white' }} size="4x" />
        </div>
        <div className='left-nav'>
          <div className='home-links'>
            <li>
              <Link to="/" >
                <img src={SteamingBowl} className='home-icon' alt="steaming bowl icon" />
              </Link>
            </li>
            <li className='pho-sunrise-link'>
              <Link to="/" >
                Phở Sunrise
              </Link>
            </li>
          </div>

          <div className="page-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </div>
        </div>

        {/* Page links for max-width 899px */}
        {showDropdown && (
          <div className='dropdown-page-links'>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/contact">Contact</Link></p>
            <p><Link to="/menu">Menu</Link></p>
            <p><Link to="/cart">Cart</Link></p>
          </div>
        )}

        <div className="right-nav">
          <CartTracker className="cart-tracker" />
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          <Profile />
        </div>

      </ul>
    </nav>
  );
}

export default Navbar;
