import React from 'react';
import { Link } from 'react-router-dom';
import CartTracker from './CartTracker';
import LoginButton from './common/Login';
import LogoutButton from './common/Logout';
import Profile from './common/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/Navbar.scss';

function Navbar() {
  const { isAuthenticated } = useAuth0();

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
          <Profile />
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          <CartTracker />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
