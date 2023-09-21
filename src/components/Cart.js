import React from 'react';
import { useCart } from '../components/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemove = (cartItem) => {
    // Use removeFromCart to remove the specific item from the cart
    removeFromCart(cartItem);
  };

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <ul>
          {cart.map((cartItem, index) => (
            <li key={index}>
              {cartItem.name} - ${cartItem.price.toFixed(2)}
              <button onClick={() => handleRemove(cartItem)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
