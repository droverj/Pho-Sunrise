import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import CartItem from './CartItem';
import CartNavbar from './CartNavbar';
import EmptyCart from './EmptyCart';
import '../styles/Cart.scss';

import ShrimpTopLeft from '../images/shrimp-tail-left-top-white.png';
import ShrimpBottomRight from '../images/shrimp-tail-bottom-right-white.png';

const Cart = () => {
  const [showRemoveItemComponent, setShowRemoveItemComponent] = useState(false);
  const { cart, addToCart, removeFromCart, deleteItemFromCart, subtotal, totalItems, emptyCart } = useCart();

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

  const handleDeleteItem = (itemToDelete) => {
    deleteItemFromCart(itemToDelete);
    setShowRemoveItemComponent(!showRemoveItemComponent);
  };

  return (
    <>
      {totalItems > 0 ? (
        <div className="cart">
          <img src={ShrimpTopLeft} className='shrimp1' alt="shrimp tail" />
          <img src={ShrimpBottomRight} className='shrimp2' alt="shrimp tail" />
          <img src={ShrimpTopLeft} className='shrimp3' alt="shrimp tail" />
          <img src={ShrimpBottomRight} className='shrimp4' alt="shrimp tail" />
          <img src={ShrimpTopLeft} className='shrimp5' alt="shrimp tail" />

          <CartNavbar totalItems={totalItems} subtotal={subtotal} />

          <div className='order-navigation-container'>
            <Link to="/menu">
              <button className='back-button'>Menu</button>
            </Link>
            <div><FontAwesomeIcon icon={faArrowRightLong} className="right-arrow-icon" style={{ color: 'silver', transform: 'scaleX(1)' }} size="1x" /></div>
            <span>Cart</span>
          </div>

          <Link to="/menu">
            <button className="return-to-menu">Back to Menu</button>
          </Link>

          <div className="cart-page-heading">
            <h1>Review your order</h1>
            <p className='subtotal'>subtotal: <span>${subtotal}</span></p>
            {/* <button className="empty-cart-button" onClick={handleEmptyCart}>
          Empty Cart
        </button> */}
          </div>

          <div className="cart-items-container">
            <ul className="cart-items">
              {cart.map((cartItem) => (
                <CartItem
                  key={cartItem.id}
                  cartItem={cartItem}
                  handleAdd={handleAdd}
                  handleRemove={handleRemove}
                  handleDeleteItem={handleDeleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}


    </>
  );
};

export default Cart;