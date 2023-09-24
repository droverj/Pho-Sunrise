import React from 'react';
import Cart from './Cart';
import { useCart } from '../components/CartContext';

const CartPage = () => {
  const { subtotal } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <Cart />
    </div>
  );
};

export default CartPage;
