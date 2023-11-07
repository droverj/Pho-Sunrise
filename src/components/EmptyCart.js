import React from 'react';
import '../styles/EmptyCart.scss'

const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
      <h2>Your Shopping Cart is Empty</h2>
      <FontAwesomeIcon icon={faSurprise} />
      <h3>Browse our menu to begin adding items to your shopping cart.</h3>
    </div>
  )
};

export default EmptyCart;