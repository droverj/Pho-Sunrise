import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSurprise } from '@fortawesome/free-solid-svg-icons';
import { canPlaceOrder } from '../utilities/canPlaceOrder';
import '../styles/EmptyCart.scss'

const EmptyCart = () => {
  const orderingAvailable = canPlaceOrder();

  // Scroll to the top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="empty-cart">
      <Link to="/menu">
        <button className="return-to-menu">Start your order</button>
      </Link>

      {!orderingAvailable &&
        <p className='ordering-availability-notice'>Ordering is unavailable until 11:30AM.</p>
      }

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