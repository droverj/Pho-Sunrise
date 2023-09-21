import React from 'react';

const MenuItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="menu-item">
      <span>{item.name}</span>
      <span>${item.price.toFixed(2)}</span>
      <div className="item-actions">
        <button onClick={() => addToCart(item)}>+</button>
        <button onClick={() => removeFromCart(item)}>−</button>
      </div>
    </div>
  );
};

export default MenuItem;
