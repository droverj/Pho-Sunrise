import React from 'react';
import { useCart } from '../components/CartContext';
import '../styles/OrderSummary.scss';

const OrderSummary = () => {
  const { cart, subtotal } = useCart();

  return (
    <div className='order-summary'>
      <ul className="cart-items">
        {cart.map((cartItem) => (
          <li className="cart-item" key={cartItem.id}>
            {Array.from({ length: cartItem.quantity }).map((_, index) => (
              <div className="items" key={index}>
                <div className='item-info'>{cartItem.name} - {cartItem.item_option}</div>
                <div className='item-price'>${cartItem.price}</div>
              </div>
            ))}
          </li>
        ))}
      </ul>
      <p className='subtotal'>
        <div>subtotal:</div>
        <div>${subtotal}</div>
      </p>
    </div>
  )
};

export default OrderSummary;