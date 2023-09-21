import React from 'react';
import { useCart } from './CartContext';
import cartIcon from '../images/Shopping-Cart.jpg';

const CartTracker = () => {
  const { totalItems } = useCart();

  return (
    <div className="cart-tracker">
      <img src={cartIcon} alt="Cart Icon" />
      <span className="cart-count">{totalItems}</span>
    </div>
  );
};

export default CartTracker;