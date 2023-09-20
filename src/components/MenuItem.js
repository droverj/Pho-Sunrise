import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <li className="menu-item">
      <span>{item.name}</span>
      <span>{item.price}</span>
    </li>
  );
};

export default MenuItem;