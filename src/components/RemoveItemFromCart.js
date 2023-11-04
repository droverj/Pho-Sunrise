import React from 'react';
import '../styles/RemoveItemFromCart.scss';

const RemoveItemFromCart = ({ item, setShowRemoveItemComponent, handleDeleteItem }) => {
  console.log(item);
  return (
    <>
      <div className='overlay'></div>

      <div className='remove-item-from-cart'>
        <button className="close-button" onClick={() => {
          setShowRemoveItemComponent(false);
          document.body.classList.remove('no-scroll');
        }}>X</button>
        <div className="confirmation-message">
          <p className="message" style={{ color: 'red' }}>Remove</p>
          <p className='item-info-container'>
            <span className="item-info">
              {item.quantity === 1 ? `${item.quantity} order ` : `${item.quantity} orders `}
            </span>
            of&nbsp;
            <span className="item-info">
              {item.name}
            </span>
          </p>
          {item.item_option &&
            <p className='item-option'>item option: <span className='option'>{item.item_option}</span></p>
          }
          <p className='message'>from your cart?</p>
        </div>

        <div className='button-options'>
          <button className='safe-button' onClick={() => {
            setShowRemoveItemComponent(false);
            document.body.classList.remove('no-scroll');
          }}>Keep</button>
          <button className="danger-button" onClick={() => handleDeleteItem(item)}>Remove</button>
        </div>

      </div>
    </>
  );
};

export default RemoveItemFromCart;
