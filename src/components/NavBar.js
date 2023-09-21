import React from 'react';
import { Link } from 'react-router-dom';
import CartTracker from './CartTracker';
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
        <CartTracker />
      </ul>
    </nav>
  );
}

export default Navbar;