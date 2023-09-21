import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <ul>
          {cart.map((cartItem, index) => (
            <li key={index}>
              {cartItem.name} - ${cartItem.price.toFixed(2)}
              <button onClick={() => removeFromCart(cartItem)}>Remove</button> {/* Use removeFromCart here */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;