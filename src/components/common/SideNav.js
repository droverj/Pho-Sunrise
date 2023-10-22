import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SideNav.scss';

function SideNav({ width, closeNav }) {
  return (
      <div className="sidenav" style={{ width }}>
          <button onClick={closeNav}>X</button>
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
  );
}

export default SideNav;