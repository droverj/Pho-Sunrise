import React from 'react';
import MenuSection from './MenuSection';
import { useCart } from '../components/CartContext';
import menuData from '../menuData.json'; 
import '../styles/Menu.scss'

const Menu = () => {
  const { addToCart } = useCart();

  return (
    <div className="menu">
      <div className="menu-sections">
        {menuData.map((section, index) => (
          <MenuSection
            key={index}
            section={section}
            addToCart={(item, id) => addToCart(item, id)}
          />
        ))}
      </div>
    </div>
  );
};


export default Menu;
