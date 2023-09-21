import React from 'react';
import { useCart } from '../components/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemove = (cartItem) => {
    removeFromCart(cartItem);
  };

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Shopping Cart is Empty</p>
      ) : (
        <ul>
          {cart.map((cartItem, index) => (
            <li key={index}>
              {cartItem.name} - ${cartItem.price.toFixed(2)} - Quantity: {cartItem.quantity}
              <button onClick={() => handleRemove(cartItem)}>Remove One</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
