import React from 'react';
import MenuSection from './MenuSection';
import { useCart } from '../components/CartContext';
import '../styles/Menu.scss';

const Menu = ({ items }) => {
  const { addToCart } = useCart();

  // Group items by section and name
  const groupedItems = {};
  items.forEach((item) => {
    if (!groupedItems[item.section]) {
      groupedItems[item.section] = {
        section_vietnamese: item.section_vietnamese,
        items: {},
      };
    }
    if (!groupedItems[item.section].items[item.name]) {
      groupedItems[item.section].items[item.name] = {
        options: [],
        name_vietnamese: item.name_vietnamese,
      };
    }
    groupedItems[item.section].items[item.name].options.push(item);
  });

  return (
    <div className="menu">
      <div className="menu-sections">
        {Object.entries(groupedItems).map(([section, sectionData], sectionIndex) => (
          <div key={sectionIndex}>
            <h2>{section} - {sectionData.section_vietnamese}</h2>
            {Object.entries(sectionData.items).map(([itemName, itemData], index) => (
              <MenuSection
                key={index}
                itemName={itemName}
                itemOptions={itemData.options}
                vietnameseName={itemData.name_vietnamese}
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
