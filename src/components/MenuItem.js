// MenuItem.js
import React from 'react';
import { useCart } from '../components/CartContext';

const MenuItem = ({ itemOptions }) => {
  const { addToCart, cart } = useCart();

  // Function to get the count of a specific item in the cart
  const getItemCount = (itemId) => {
    return cart.reduce((count, cartItem) => {
      return cartItem.id === itemId ? count + cartItem.quantity : count;
    }, 0);
  };

  return (
    <div className="menu-item">
      <div className="item-options">
        {itemOptions.map((item, index) => {
          // Generate a unique identifier for each option
          const optionId = `${item.id}_${index}`;
          const itemCount = getItemCount(item.id);

          return (
            <div key={optionId} className='option'>
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

                <div className='quantity-added-container'>
                {itemCount > 0 ? (
                  <p className="quantity-added">{itemCount} added to cart</p>
                ) : null}
                </div>

              </div>
            </div>
          );
        })}
      </div>
      {/* PICTURE HERE */}
      <div className='test'>test</div>
    </div>
  );
};

export default MenuItem;


