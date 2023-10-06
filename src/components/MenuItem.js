import React from 'react';
import { useCart } from '../components/CartContext';

const MenuItem = ({ item }) => {
  const { addToCart } = useCart();
  const basePrice = parseFloat(item.base_price);

  return (
    <div className="menu-item">
      <span>{item.name}</span>
      <span>{item.vietnamese}</span>
      <div className="item-options">
        {item.options &&
          item.options.map((option, index) => {
            // Generate a unique identifier for each option
            const optionId = `${item.id}_${index}`;
            return (
              <div key={optionId}>
                {option.size && <span>{option.size}</span>}
                {option.pieces && <span>{option.pieces} pieces </span>}
                {option.ingredient && <span>+ {option.ingredient}</span>}
                <div className="option-actions">
                  {option.price_adjustment !== null ? (
                    <span>${(basePrice + option.price_adjustment).toFixed(2)}</span>
                  ) : (
                    <span>${basePrice.toFixed(2)}</span>
                  )}
                  <button onClick={() => addToCart({ ...item, optionId, size: option.size, pieces: option.pieces, ingredient: option.ingredient, price: (basePrice + parseFloat(option.price_adjustment)).toFixed(2) })}>+</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};


export default MenuItem;
