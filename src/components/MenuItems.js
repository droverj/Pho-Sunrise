import React from 'react';
import MenuItem from './MenuItem';

const MenuItems = ({ items }) => {
  const groupedItems = {};

  items.forEach((item) => {
    if (!groupedItems[item.name]) {
      groupedItems[item.name] = {
        name: item.name,
        name_vietnamese: item.name_vietnamese,
        item_options: [],
      };
    }
    groupedItems[item.name].item_options.push(item);
  });

  return (
    <div className="menu-items">
      {Object.values(groupedItems).map((groupedItem) => (
        <MenuItem key={groupedItem.name} groupedItem={groupedItem} />
      ))}
    </div>
  );
};

export default MenuItems;
