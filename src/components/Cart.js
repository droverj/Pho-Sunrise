import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/Cart.scss';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    telephone: '',
    directions: '',
  });
  
  const { isAuthenticated, user } = useAuth0(); // Destructure the user variable

  const handleRemove = (cartItem) => {
    removeFromCart(cartItem);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the total price
    const total = calculateTotalPrice();

    // Check if the user is authenticated and retrieve their email
    if (isAuthenticated) {
      const userEmail = user.email; // Get user's email
      // Include userEmail in your form data when submitting
      const orderData = {
        name: customerInfo.name,
        email: userEmail, // Include the user's email
        telephone: customerInfo.telephone,
        directions: customerInfo.directions,
        cart: cart,
        total: total,
      };

      // Perform your order processing logic here
      console.log("Order Data:", orderData);
    } else {
      // Handle the case where the user is not authenticated
      // Display a message or take appropriate action
      console.log("User is not authenticated. Please sign in to place an order.");
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
  };

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p className="empty-cart">Shopping Cart is Empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((cartItem, index) => (
              <li className="cart-item" key={index}>
                <div className="item-info">
                  {cartItem.name} - ${cartItem.price.toFixed(2)} - Quantity: {cartItem.quantity}
                </div>
                <button className="remove-button" onClick={() => handleRemove(cartItem)}>
                  Remove One
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
      <div className="order-form">
        <h2>Customer Information</h2>
        {!isAuthenticated && (
          <p className="login-notice">
            Please sign in to place an order from Phở Sunrise.
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={customerInfo.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Phone Number</label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              value={customerInfo.telephone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="directions">Special Requests</label>
            <textarea
              id="directions"
              name="directions"
              value={customerInfo.directions}
              onChange={handleChange}
              rows="4"
              placeholder="Any special instructions or directions..."
            ></textarea>
          </div>
          {isAuthenticated && (
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                readOnly
              />
            </div>
          )}
          <p className="cart-total">Order Total: ${calculateTotalPrice().toFixed(2)}</p>
          <button type="submit" disabled={!isAuthenticated}>
            Place Order
          </button>
        </form>
      </div>
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
