import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartNavbar.scss';

const CartNavbar = ({ totalItems }) => {
  return (
    <div className='cart-navbar'>
      {totalItems > 0 && (
        <Link to="/checkout">
          <button className="checkout-button">
            Proceed to Checkout
          </button>
        </Link>
      )}
    </div>
  )
};

export default CartNavbar;