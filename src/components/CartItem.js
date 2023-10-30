import React, { useState } from 'react';
import RemoveItemFromCart from './RemoveItemFromCart';

const CartItem = ({ cartItem, handleAdd, handleRemove, handleDeleteItem }) => {
  const [showRemoveItemComponent, setShowRemoveItemComponent] = useState(false);

  return (
    <li className="cart-item" key={cartItem.id}>
      <div className="item-info">
        {cartItem.name} - {cartItem.item_option} ${cartItem.price}
      </div>
      <button className='delete' onClick={() => setShowRemoveItemComponent(true)}>
        x
      </button>
      {showRemoveItemComponent && (
        <RemoveItemFromCart item={cartItem} handleDeleteItem={handleDeleteItem} />
      )}
      <div className='quantity-controller'>
        <button
          className={`remove ${cartItem.quantity === 1 ? 'disabled-button' : ''}`}
          onClick={() => handleRemove(cartItem)}
          disabled={cartItem.quantity === 1}
        >
          -
        </button>
        <div className="item-quantity">{cartItem.quantity}</div>
        <button className='add' onClick={() => handleAdd(cartItem)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
