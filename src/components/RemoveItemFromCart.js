import React from 'react';
import '../styles/RemoveItemFromCart.scss';

const RemoveItemFromCart = ({ item, setShowRemoveItemComponent, handleDeleteItem }) => {
  return (
    <>
      <div className='overlay'></div>
      <div className='remove-item-from-cart'>
        <button className="close-button" onClick={() => {
          setShowRemoveItemComponent(false);
          document.body.classList.remove('no-scroll');
        }}>X</button>
        <h4>Remove {item.quantity} {item.name} from cart?</h4>
        <button onClick={() => {
          setShowRemoveItemComponent(false);
          document.body.classList.remove('no-scroll');
        }}>Return to Cart</button>
        <button onClick={() => handleDeleteItem(item)}>Delete Item from Cart</button>
      </div>
    </>
  )
};

export default RemoveItemFromCart;