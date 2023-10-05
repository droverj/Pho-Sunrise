import React from 'react';
import { useCart } from '../components/CartContext';

const MenuItem = ({ item }) => {
  const { addToCart } = useCart();

  // Convert the price to a number
  const price = parseFloat(item.price);

  return (
    <div className="menu-item">
      <span>{item.name}</span>
      <span>{item.vietnamese}</span>
      <span>${price.toFixed(2)}</span>
      <div className="item-actions">
        <button onClick={() => addToCart(item)}>+</button>
      </div>
    </div>
  );
};

export default MenuItem;
