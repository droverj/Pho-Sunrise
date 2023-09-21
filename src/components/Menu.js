import React from 'react';
import MenuSection from './MenuSection';
import { useCart } from '../components/CartContext';
import menuData from '../menuData.json'; 

const Menu = () => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="menu">
      <div className="menu-sections">
        {menuData.map((section, index) => (
          <MenuSection
            key={index}
            section={section}
            addToCart={(item, id) => addToCart(item, id)}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
};


export default Menu;
