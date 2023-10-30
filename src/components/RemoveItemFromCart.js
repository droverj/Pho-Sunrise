import React from 'react';
import '../styles/RemoveItemFromCart.scss';

const RemoveItemFromCart = ({item}) => {
  return (
    <div className='remove-item-from-cart'>
      <h4>Remove {item.name} from cart?</h4>
    </div>
  )
};

export default RemoveItemFromCart;