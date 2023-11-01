import React from 'react';
import { useCart } from '../components/CartContext';
import '../styles/OrderSummary.scss';

const OrderSummary = () => {
  const { cart, subtotal } = useCart();

  return (
    <div className='order-summary'>
      <p>Order Summary</p>
      <ul className="order-summary-cart-items">
        {cart.map((cartItem) => (
          <li className="order-summary-cart-item" key={cartItem.id}>
            {Array.from({ length: cartItem.quantity }).map((_, index) => (
              <div className="items" key={index}>
                <div className='info'>{cartItem.name} - {cartItem.item_option}</div>
                <div className='price'>${cartItem.price}</div>
              </div>
            ))}
          </li>
        ))}
      </ul>
      <div className='subtotal'>
        <div className='info'>subtotal:</div>
        <div className='price'>${subtotal}</div>
      </div>
    </div>
  )
};

export default OrderSummary;