import React from 'react';
import { Link } from 'react-router-dom';
import CartTracker from '../CartTracker';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';
import SteamingBowl from '../../images/steaming-bowl.png'
import '../../styles/Navbar.scss';

function Navbar() {
  const { isAuthenticated } = useAuth0();

  return (
    <nav>

      <ul>
        <div className="links">
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
        <div className="right-nav">
          <Profile />
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          <CartTracker className="cart-tracker" />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
