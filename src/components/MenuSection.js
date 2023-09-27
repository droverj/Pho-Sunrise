import React from 'react';
import MenuItem from './MenuItem';
import '../styles/MenuSection.scss';
import { useCart } from '../components/CartContext';

const MenuSection = ({ section }) => {
  const { addToCart } = useCart();

  if (!section) {
    return null;
  }

  return (
    <div className="menu-section">
      <h3>{section.title}</h3>
      <div className="section-content">
        <div className="menu-items">
          {section.items.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              addToCart={addToCart}
            />
          ))}
        </div>
        <div className="section-images">
          {section.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${section.title} ${index + 1}`}
              className="section-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;