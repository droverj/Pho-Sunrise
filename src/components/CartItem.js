import React, { useState } from 'react';
import RemoveItemFromCart from './RemoveItemFromCart';
import '../styles/CartItem.scss'

const CartItem = ({ cartItem, handleAdd, handleRemove, handleDeleteItem }) => {
  const [showRemoveItemComponent, setShowRemoveItemComponent] = useState(false);

  return (
    <li className="cart-item" key={cartItem.id}>
      <div className="item-info">
        {cartItem.name} - {cartItem.item_option} ${cartItem.price}
      </div>
      {showRemoveItemComponent && (
        <RemoveItemFromCart
          item={cartItem}
          handleDeleteItem={handleDeleteItem}
          setShowRemoveItemComponent={setShowRemoveItemComponent}
        />
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
      
      <button className='delete' onClick={() => setShowRemoveItemComponent(true)}>
        x
      </button>
    </li>
  );
};

export default CartItem;
