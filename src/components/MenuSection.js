import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ section, cart, addItemToCart, removeItemFromCart }) => {
  return (
    <div className="menu-section">
      <h2>{section.title}</h2>
      <ul>
        {section.items.map((item, index) => (
          <li key={index} className="menu-item">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <div className="item-actions">
              <button onClick={() => addItemToCart(item)}>+</button>
              <span>{cartItemQuantity(item, cart)}</span>
              <button onClick={() => removeItemFromCart(item)}>-</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSection;

// Helper function to get the quantity of an item in the cart
function cartItemQuantity(item, cart) {
  const cartItem = cart.find((cartItem) => cartItem.name === item.name);
  return cartItem ? cartItem.quantity : 0;
}
