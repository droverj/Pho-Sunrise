import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/SideNav.scss';

function SideNav({ width, closeNav }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="sidenav" style={{ width }}>
      <button onClick={closeNav}>X</button>
      <li>
        <Link to="/" className={currentPath === '/' ? 'active' : ''} onClick={closeNav}>Home</Link>
      </li>
      <li>
        <Link to="/contact" className={currentPath === '/contact' ? 'active' : ''} onClick={closeNav}>Contact</Link>
      </li>
      <li>
        <Link to="/menu" className={currentPath === '/menu' ? 'active' : ''} onClick={closeNav}>Menu</Link>
      </li>
      <li>
        <Link to="/cart" className={currentPath === '/cart' ? 'active' : ''} onClick={closeNav}>Cart</Link>
      </li>
    </div>
  );
}

export default SideNav;