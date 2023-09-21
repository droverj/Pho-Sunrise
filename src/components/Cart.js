import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/order-info">
        <button className="place-order-button">Place Order</button>
      </Link>
    </div>
  );
};

export default Cart;
