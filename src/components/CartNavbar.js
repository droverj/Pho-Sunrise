import React from 'react';
import { Link } from 'react-router-dom';
import { canPlaceOrder } from '../utilities/canPlaceOrder';
import '../styles/CartNavbar.scss';

const CartNavbar = ({ totalItems, subtotal }) => {
  const orderingAvailable = canPlaceOrder();
  console.log("ordering available: ", orderingAvailable);
  console.log("REMEMBER TO APPLY BUTTON DISABLE");

  return (
    <div className='cart-navbar'>
      {totalItems > 0 && (
        <>
          <p className='cart-nav-subtotal'>subtotal: <span>${subtotal}</span></p>
          <Link to="/checkout">
            {orderingAvailable ?
              (
                <button className="checkout-button">Order</button>
              ) : (
                <button className="checkout-button-disabled" disabled>Order</button>
              )
            }
          </Link>
        </>
      )}
    </div>
  )
};

export default CartNavbar;