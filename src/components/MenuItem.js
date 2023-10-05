import React from 'react';
import { useCart } from '../components/CartContext';

const MenuItem = ({ item }) => {
  const { addToCart } = useCart();
  const price = parseFloat(item.base_price);

  return (
    <div className="menu-item">
      <span>{item.name}</span>
      <span>{item.vietnamese}</span>
      <span>${price.toFixed(2)}</span>
      <div className="item-actions">
        <button onClick={() => addToCart(item)}>+</button>
      </div>
      <div className="item-options">
        {item.options &&
          item.options.map((option, index) => (
            <div key={index}>
              <span>{option.size}</span>
              <span>${option.price_adjustment.toFixed(2)}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuItem;
