import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import cartIcon from '../images/Shopping-Cart.jpg';

const CartTracker = () => {
  const { totalItems } = useCart();

  return (
    <div className="cart-tracker">
      <Link to="/cart" className="cart-link">
        <img src={cartIcon} alt="Cart Icon" />
      </Link>
      <span className="cart-count">{totalItems}</span>
    </div>
  );
};

export default CartTracker;
