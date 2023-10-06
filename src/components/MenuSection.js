import React from 'react';
import MenuItem from './MenuItem';
import '../styles/MenuSection.scss';
import { useCart } from '../components/CartContext';

const MenuSection = ({ itemName, itemOptions }) => {
  return (
    <div className="menu-section">
      <h3>{itemName}</h3>
      <div className="section-content">
        <div className="menu-items">
          <MenuItem itemOptions={itemOptions} />
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
