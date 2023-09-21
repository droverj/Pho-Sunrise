import React from 'react';
import Cart from './Cart';

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;
