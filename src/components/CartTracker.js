import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';

const CartTracker = () => {
  const { totalItems } = useCart();

  return (
    <div className="cart-tracker">
      <Link to="/cart" className="cart-link">
        <FontAwesomeIcon icon={faCartShopping} className="cart-icon" style={{ color: 'white' }} />
      </Link>
      <span className="cart-count">{totalItems}</span>
    </div>
  );
};

export default CartTracker;
