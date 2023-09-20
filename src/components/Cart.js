import React from 'react';

const Cart = ({ cart = [], removeFromCart }) => {
  console.log("SHOPPING CART: ", cart);

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <ul>
          {cart.map((cartItem, index) => (
            <li key={index}>
              {cartItem.name} - ${cartItem.price.toFixed(2)}
              <button onClick={() => removeFromCart(cartItem)}>-</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;


// console.log("SHOPPING CART: ", cart);