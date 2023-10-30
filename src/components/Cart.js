import React from 'react';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSurprise } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import '../styles/Cart.scss';

const Cart = () => {
  const { cart, addToCart, removeFromCart, subtotal, totalItems, emptyCart } = useCart();

  const handleAdd = (cartItem) => {
    addToCart(cartItem);
  };

  const handleRemove = (cartItem) => {
    removeFromCart(cartItem);
  };

  const handleEmptyCart = () => {
    if (window.confirm('Are you sure you want to empty your cart?')) {
      emptyCart();
    }
  };

  return (
    <div className="cart">

      <div className='order-navigation-container'>
        <Link to="/menu">
          <button className='back-btn'>Menu</button>
        </Link>
        <div><FontAwesomeIcon icon={faArrowRightLong} className="right-arrow-icon" style={{ color: 'silver', transform: 'scaleX(1)' }} size="1x" /></div>
        <span>Cart</span>
      </div>

      <Link to="/menu">
        <button className="return-to-menu">
          {totalItems === 0 ? 'Start Your Order' : 'Back to Menu'}
        </button>
      </Link>

      <Link to="/checkout">
        <button className="checkout-button" disabled={totalItems < 1}>
          Proceed to Checkout
        </button>
      </Link>

      <div className="cart-page-heading">
        <h1>Review Your Order</h1>
        <button className="empty-cart-button" onClick={handleEmptyCart}>
          Empty Cart
        </button>
        <div className="cart-page-details">
          <p>Items in Cart: {totalItems}</p>
          <p>
            Subtotal: <b>${subtotal}</b>
          </p>
        </div>
      </div>
      <div className="cart-items-container">
        {totalItems === 0 ? (
          <div className="empty-cart-container">
            <h2>Your Shopping Cart is Empty</h2>
            <FontAwesomeIcon icon={faSurprise} />
            <h3>Browse our menu to begin adding items to your shopping cart.</h3>
          </div>
        ) : (
          <>
            <h2 className="cart-items-heading">Your Items</h2>
            <ul className="cart-items">
              {cart.map((cartItem) => (
                <li className="cart-item" key={cartItem.id}>
                  <div className="item-info">
                    {cartItem.name} - {cartItem.item_option} ${cartItem.price}
                  </div>
                  <div className='quantity-controller'>
                  <button onClick={() => handleRemove(cartItem)}>-</button>
                  <button onClick={() => handleAdd(cartItem)}>+</button>
                  <div className="item-quantity">{cartItem.quantity}</div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

    </div>
  );
};

export default Cart;