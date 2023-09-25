import React from 'react';
import Cart from './Cart';
import '../styles/CartPage.scss';
import { useCart } from '../components/CartContext';

const CartPage = () => {
  const { subtotal, totalItems } = useCart();

  return (
    <div className="cart-page">
      <div className="cart-page-heading">
      <h1>Review Your Order</h1>
      <div className="cart-page-details">
      <p>Items in Cart: {totalItems}</p>
      <p>Subtotal: <b>${subtotal.toFixed(2)}</b></p>
      </div>
      </div>
      <Cart />
    </div>
  );
};

export default CartPage;
