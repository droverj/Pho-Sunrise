// MenuItem.js
import React from 'react';
import { useCart } from '../components/CartContext';

const MenuItem = ({ itemOptions }) => {
  const { addToCart } = useCart();

  return (
    <div className="menu-item">
      <div className="item-options">
        {itemOptions.map((item, index) => {
          // Generate a unique identifier for each option
          const optionId = `${item.id}_${index}`;
          return (
            <div key={optionId}>
              {item.item_option && <span>{item.item_option}</span>}
              <div className="option-actions">
                <span>${parseFloat(item.price).toFixed(2)}</span>
                <button
                  onClick={() =>
                    addToCart({
                      id: item.id,
                      name: item.name,
                      vietnamese: item.vietnamese,
                      optionId,
                      item_option: item.item_option,
                      price: parseFloat(item.price).toFixed(2),
                    })
                  }
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItem;


