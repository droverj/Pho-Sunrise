import React from 'react';
import { Link } from 'react-router-dom';
import CartTracker from './CartTracker';
import LoginButton from './common/Login';
import LogoutButton from './common/Logout';
import '../styles/Navbar.scss';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <LoginButton />
        <LogoutButton />
        <CartTracker />
      </ul>
    </nav>
  );
}

export default Navbar;