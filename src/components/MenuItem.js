import React from 'react';
import { useCart } from '../components/CartContext';

const MenuItem = ({ item }) => {
  const { addToCart } = useCart();
  const basePrice = parseFloat(item.base_price);
  const priceAdjustment = parseFloat(item.price_adjustment);
  
  return (
    <div className="menu-item">
      <span>{item.name}</span>
      <span>{item.vietnamese}</span>
      <div className="item-options">
        {item.item_option && (
          <div>
            <span>{item.item_option}</span>
            <div className="option-actions">
              {item.price_adjustment !== null ? (
                <span>${(basePrice + parseFloat(item.price_adjustment)).toFixed(2)}</span>
              ) : (
                <span>${basePrice.toFixed(2)}</span>
              )}
              <button
                onClick={() =>
                  addToCart({
                    id: item.id,
                    name: item.name,
                    vietnamese: item.vietnamese,
                    item_option: item.item_option,
                    price: (basePrice + parseFloat(item.price_adjustment)).toFixed(2),
                  })
                }
              >
                +
              </button>
            </div>
          </div>
        )}
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
                    <span>${(basePrice + priceAdjustment).toFixed(2)}</span>
                  ) : (
                    <span>${basePrice.toFixed(2)}</span>
                  )}
                  <button
                    onClick={() =>
                      addToCart({
                        id: item.id,
                        name: item.name,
                        vietnamese: item.vietnamese,
                        optionId,
                        size: option.size,
                        pieces: option.pieces,
                        ingredient: option.ingredient,
                        price: (basePrice + priceAdjustment).toFixed(2),
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

