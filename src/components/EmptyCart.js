import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSurprise } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import '../styles/EmptyCart.scss'

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <Link to="/menu">
        <button className="return-to-menu">Start your order</button>
      </Link>
      <div className='order-navigation-container'>
        <Link to="/menu">
          <button className='back-button'>Menu</button>
        </Link>
        <div><FontAwesomeIcon icon={faArrowRightLong} className="right-arrow-icon" style={{ color: 'silver', transform: 'scaleX(1)' }} size="1x" /></div>
        <span>Cart</span>
      </div>

      <div className='empty-cart-container'>
        <h2>Your Shopping Cart is Empty</h2>
        <FontAwesomeIcon icon={faSurprise} />
        <h3>Browse our menu to begin adding items to your shopping cart.</h3>
      </div>
    </div>
  )
};

export default EmptyCart;