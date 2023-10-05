import React from 'react';
import MenuSection from './MenuSection';
import { useCart } from '../components/CartContext';
import '../styles/Menu.scss';

const Menu = ({ items }) => {
  const { addToCart } = useCart();

  // Group items by section
  const sections = {};
  items.forEach((item) => {
    if (!sections[item.section]) {
      sections[item.section] = [];
    }
    sections[item.section].push(item);
  });

  return (
    <div className="menu">
      <div className="menu-sections">
        {Object.entries(sections).map(([section, items], index) => (
          <MenuSection
            key={index}
            sectionTitle={section}
            items={items}
            addToCart={(item) => addToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
