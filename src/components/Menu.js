import React from 'react';
import MenuSection from './MenuSection';
import { useCart } from '../components/CartContext';
import '../styles/Menu.scss';

const Menu = ({ items }) => {
  console.log(items);
  const { addToCart } = useCart();

  // Group items by section and name
  const groupedItems = {};
  items.forEach((item) => {
    if (!groupedItems[item.section]) {
      groupedItems[item.section] = {};
    }
    if (!groupedItems[item.section][item.name]) {
      groupedItems[item.section][item.name] = {
        options: [],
        name_vietnamese: item.name_vietnamese, // Add the Vietnamese name here
      };
    }
    groupedItems[item.section][item.name].options.push(item);
  });

  return (
    <div className="menu">
      <div className="menu-sections">
        {Object.entries(groupedItems).map(([section, sectionItems], sectionIndex) => (
          <div key={sectionIndex}>
            <h2>{section}</h2>
            {Object.entries(sectionItems).map(([itemName, itemData], index) => (
              <MenuSection
                key={index}
                itemName={itemName}
                itemOptions={itemData.options} // Pass the options array
                vietnameseName={itemData.name_vietnamese} // Pass the Vietnamese name
                addToCart={(item) => addToCart(item)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
