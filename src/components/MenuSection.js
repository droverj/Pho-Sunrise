import React from 'react';
import MenuItem from './MenuItem';
import '../styles/MenuSection.scss';
import { useCart } from '../components/CartContext';

const MenuSection = ({ sectionTitle, items }) => {
  const { addToCart } = useCart();

  return (
    <div className="menu-section">
      <h3>{sectionTitle}</h3>
      <div className="section-content">
        <div className="menu-items">
          {items.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
