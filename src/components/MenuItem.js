import React from 'react';
import { useCart } from '../components/CartContext';

const MenuItem = ({ item }) => {
  const { addToCart } = useCart();
  const basePrice = parseFloat(item.base_price);

  console.log(item);

  return (
    <div className="menu-item">
      <span>{item.name}</span>
      <span>{item.vietnamese}</span>
      <div className="item-actions">
        <button onClick={() => addToCart(item)}>+</button>
      </div>
      <div className="item-options">
        {item.options &&
          item.options.map((option, index) => (
            <div key={index}>
              {option.size && <span>{option.size}</span>}
              {option.quantity && <span>{option.quantity} pieces </span>}
              {option.ingredient && <span>+ {option.ingredient}</span>}
              {option.price_adjustment !== null ? (
                <span>${(basePrice + option.price_adjustment).toFixed(2)}</span>
              ) : (
                <span>${basePrice.toFixed(2)}</span>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuItem;
