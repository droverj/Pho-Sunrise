import React from 'react';
import { useCart } from './CartContext';
import cartIcon from '../path/to/cart-icon.png'; // Replace with the path to your cart icon image

const CartTracker = () => {
  const { cart, removedItemsCount } = useCart();

  return (
    <div className="cart-tracker">
      <img src={cartIcon} alt="Cart Icon" />
      <span className="cart-count">{cart.length - removedItemsCount}</span>
    </div>
  );
};

export default CartTracker;
