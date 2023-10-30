import React from 'react';
import '../styles/RemoveItemFromCart.scss';

const RemoveItemFromCart = ({item, setShowRemoveItemComponent, handleDeleteItem }) => {
  return (
    <div className='remove-item-from-cart'>
      <button onClick={() => setShowRemoveItemComponent(false)} >X</button>
      <h4>Remove {item.name} from cart?</h4>
    </div>
  )
};

export default RemoveItemFromCart;