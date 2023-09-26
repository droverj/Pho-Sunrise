import React from 'react';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSurprise } from '@fortawesome/free-solid-svg-icons';
import '../styles/Cart.scss';

const Cart = () => {
  const { cart, addToCart, removeFromCart, subtotal, totalItems, emptyCart } = useCart();

  const { isAuthenticated } = useAuth0();

  const handleAdd = (cartItem) => {
    addToCart(cartItem);
  };

  const handleRemove = (cartItem) => {
    removeFromCart(cartItem);
  };

  const handleEmptyCart = () => {
    emptyCart();
  };

  return (
    <div className="cart">
      <div className="cart-page-heading">
        <h1>Review Your Order</h1>

        <button className="empty-cart-button" onClick={handleEmptyCart}>
          Empty Cart
        </button>

        <div className="cart-page-details">
          <p>Items in Cart: {totalItems}</p>
          <p>Subtotal: <b>${subtotal.toFixed(2)}</b></p>
        </div>
      </div>
      <div className="cart-items-container">
        {cart.length === 0 ? (
          <div className="empty-cart-container">
            <h2>Your Shopping Cart is Empty</h2><br />
            <FontAwesomeIcon icon={faSurprise} />
            <h3>Browse our menu to begin adding items to your shopping cart.</h3>
          </div>
        ) : (
          <>
            <h2 className="cart-items-heading"> Your Items </h2>
            <ul className="cart-items">
              {cart.map((cartItem, index) => (
                <li className="cart-item" key={index}>
                  <div className="item-info">
                    {cartItem.name} - ${cartItem.price.toFixed(2)}
                  </div>
                  <button onClick={() => handleRemove(cartItem)}>-</button>
                  <button onClick={() => handleAdd(cartItem)}>+</button>
                  <div className="cart-item-quantity">{cartItem.quantity}</div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <Link to="/checkout">
        <button className="place-order-button" disabled={!isAuthenticated}>
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default Cart;




  // Define the available pickup times for each day
  // const availableTimes = {
  //   0: [ // Sunday
  //     '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  //     '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
  //     '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
  //   ],
  //   1: [], // Monday (closed)
  //   2: [ // Tuesday
  //     '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  //     '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
  //     '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
  //   ],
  //   3: [ // Wednesday
  //     '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  //     '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
  //     '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
  //   ],
  //   4: [ // Thursday
  //     '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  //     '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
  //     '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
  //   ],
  //   5: [ // Friday
  //     '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  //     '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
  //     '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
  //     '8:30 PM', '9:00 PM'
  //   ],
  //   6: [ // Saturday
  //     '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  //     '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
  //     '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
  //     '8:30 PM', '9:00 PM'
  //   ],
  // };
