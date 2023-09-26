import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';
// Styling for CartTracker.js included in Navbar.scss

const CartTracker = () => {
  const { totalItems } = useCart();

  return (
    <div className="cart-tracker">
      <span className="cart-count">{totalItems}</span>
      <Link to="/cart" className="cart-link">
        <FontAwesomeIcon icon={faCartShopping} className="cart-icon" style={{ color: 'white' }} size="2x" />
      </Link>
    </div>
  );
};

export default CartTracker;
