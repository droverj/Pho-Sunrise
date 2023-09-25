import React from 'react';
import { Link } from 'react-router-dom';
import CartTracker from './CartTracker';
import LoginButton from './common/Login';
import LogoutButton from './common/Logout';
import Profile from './common/Profile';
import '../styles/Navbar.scss';

function Navbar() {
  return (
    <nav>
      <ul>
        <div className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </div>
        <div className="right-nav">
          <Profile className="profile" />
          <CartTracker className="cart-tracker" />
          <LoginButton />
          <LogoutButton />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;