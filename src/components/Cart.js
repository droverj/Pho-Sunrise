import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSurprise } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import CartItem from './CartItem';
import CartNavbar from './CartNavbar';
import '../styles/Cart.scss';

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
    <div className="cart">

      {totalItems > 0 && (
        <CartNavbar totalItems={totalItems} subtotal={subtotal} />
      )}

      <div className='order-navigation-container'>
        <Link to="/menu">
          <button className='back-button'>Menu</button>
        </Link>
        <div><FontAwesomeIcon icon={faArrowRightLong} className="right-arrow-icon" style={{ color: 'silver', transform: 'scaleX(1)' }} size="1x" /></div>
        <span>Cart</span>
      </div>

      <Link to="/menu">
        <button className="return-to-menu">
          {totalItems === 0 ? 'Start Your Order' : 'Back to Menu'}
        </button>
      </Link>

      {totalItems > 0 && (
        <div className="cart-page-heading">
          <h1>Review your order</h1>
          <p className='subtotal'>subtotal: <span>${subtotal}</span></p>

          <button className="empty-cart-button" onClick={handleEmptyCart}>
            Empty Cart
          </button>

        </div>
      )}

      <div className="cart-items-container">
        {totalItems === 0 ? (
          <div className="empty-cart-container">
            <h2>Your Shopping Cart is Empty</h2>
            <FontAwesomeIcon icon={faSurprise} />
            <h3>Browse our menu to begin adding items to your shopping cart.</h3>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>

    </div>
  );
};

export default Cart;