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
    if (window.confirm('Are you sure you want to empty your cart?')) {
      emptyCart();
    }
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
          <p>
            Subtotal: <b>${subtotal.toFixed(2)}</b>
          </p>
        </div>
      </div>
      <div className="cart-items-container">
        {cart.length === 0 ? (
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
                  {cartItem.name} - {cartItem.item_option} ${(cartItem.price).toFixed(2)}
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