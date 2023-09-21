import React, { useState } from 'react';
import MenuSection from './MenuSection';
import { useCart } from '../components/CartContext';

const Menu = () => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="menu">
      <div className="menu-sections">
        {sections.map((section, index) => (
          <MenuSection
            key={index}
            section={section}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;