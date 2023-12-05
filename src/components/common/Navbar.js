import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CartTracker from '../CartTracker';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './Profile';
import SideNav from './SideNav';
import Logo from '../../images/thai-basil-logo.png'
import '../../styles/Navbar.scss';

function Navbar() {
  const { isAuthenticated } = useAuth0();
  const [wid, setWid] = useState('0%');

  const openSidenav = () => {
    setWid('35%');
  };

  const closeSidenav = () => {
    setWid('0%');
  };

  return (
    <nav>
      <ul>
        <div className='main-nav'>
          <div className='home-links'>
            <li>
              <Link to="/" >
                <img src={Logo} className='home-icon' alt="steaming bowl icon" />
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
        <div className="fa-bars-icon" onClick={openSidenav}>
          <FontAwesomeIcon icon={faBars} className="bars-icon" style={{ color: 'white' }} size="4x" />
        </div>
          <SideNav width={wid} closeNav={closeSidenav} />

        <div className="nav-imports">
          <CartTracker className="cart-tracker" />
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          <Profile />
        </div>

      </ul>
    </nav>
  );
}

export default Navbar;
