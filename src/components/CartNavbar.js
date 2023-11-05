import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartNavbar.scss';

const CartNavbar = ({ totalItems, subtotal }) => {
  return (
    <div className='cart-navbar'>
      {totalItems > 0 && (
        <>
          <p className='cart-nav-subtotal'>subtotal: <span>${subtotal}</span></p>
          <Link to="/checkout">
            <button className="checkout-button">
              Order
            </button>
          </Link>
        </>
      )}
    </div>
  )
};

export default CartNavbar;