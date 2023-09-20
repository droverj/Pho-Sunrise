import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ section, cart, addToCart, removeFromCart }) => {
  return (
    <div className="menu-section">
      <h2>{section.title}</h2>
      <div className="menu-items">
        {section.items.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
