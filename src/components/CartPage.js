import React, { useState } from 'react';
import Cart from './Cart';

const CartPage = () => {
  // Define a state variable to store the subtotal
  const [subtotal, setSubtotal] = useState(0);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <Cart subtotal={subtotal} setSubtotal={setSubtotal} />
    </div>
  );
};

export default CartPage;
