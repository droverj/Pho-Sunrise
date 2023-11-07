import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSurprise } from '@fortawesome/free-solid-svg-icons';
import '../styles/EmptyCart.scss'

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <Link to="/menu">
        <button className="return-to-menu">Start your order</button>
      </Link>
      <div className='empty-cart-container'>
        <h2>it's empty</h2>
        <FontAwesomeIcon icon={faSurprise} />
        <p>Browse our
          <Link to="/menu">
            <button className="menu-link">menu</button>
          </Link>
          to begin adding items to your order.</p>
      </div>
    </div>
  )
};

export default EmptyCart;