import React from 'react';
import { useCart } from '../providers/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../styles/MenuItem.scss';

const MenuItem = ({ groupedItem }) => {
  const { name, description, item_options } = groupedItem;
  const { addToCart, cart } = useCart();

  // Function to get the count of a specific item in the cart
  const getItemCount = (itemId) => {
    return cart.reduce((count, cartItem) => {
      return cartItem.id === itemId ? count + cartItem.quantity : count;
    }, 0);
  };

  return (
    <div className="menu-item">
      <div className='item-name'>
        <h3 className='name'>{name}</h3>
        <h3 className='description'>{description}</h3>
      </div>

      <div className="item-options">
        {item_options.map((option) => (
          <div key={option.id} className='option'>
            <div className='details'>
              <span className='price'>${parseFloat(option.price).toFixed(2)}</span>
              <span>{option.item_option}</span>
            </div>
            <button
              onClick={() =>
                addToCart({
                  id: option.id,
                  name: option.name,
                  item_option: option.item_option,
                  price: parseFloat(option.price).toFixed(2),
                })
              }
            >
              order
            </button>

            <div className='quantity-added-container'>
              {getItemCount(option.id) > 0 ? (
                <div className='quantity-added'>
                  <FontAwesomeIcon icon={faCartShopping} className="cart-icon" style={{ color: '#3C4755' }} size="1x" />
                  <p className="count">{getItemCount(option.id)}</p>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;


