import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/Cart.scss';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    pickupTimeOption: 'asap', // Change 'now' to 'asap'
    pickupTime: '', // To store selected pickup time
  });
  const { isAuthenticated, user } = useAuth0(); // Destructure the user variable

  // Define the available pickup times for each day
  const availableTimes = {
    0: [ // Sunday
      '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
      '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
      '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
    ],
    1: [], // Monday (closed)
    2: [ // Tuesday
      '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
      '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
      '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
    ],
    3: [ // Wednesday
      '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
      '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
      '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
    ],
    4: [ // Thursday
      '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
      '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
      '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
    ],
    5: [ // Friday
      '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
      '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
      '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
      '8:30 PM', '9:00 PM'
    ],
    6: [ // Saturday
      '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
      '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
      '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
      '8:30 PM', '9:00 PM'
    ],
  };

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

    // Check if the user is authenticated and retrieve their email
    if (isAuthenticated) {
      const userEmail = user.email; // Get user's email
      // Include userEmail in your form data when submitting
      const orderData = {
        name: customerInfo.name,
        email: userEmail, // Include the user's email
        telephone: customerInfo.telephone,
        directions: customerInfo.directions,
        pickupTimeOption: customerInfo.pickupTimeOption,
        pickupTime: customerInfo.pickupTime,
      };

      // Perform your order processing logic here
      console.log("Order Data:", orderData);
    } else {
      // Handle the case where the user is not authenticated
      // Display a message or take appropriate action
      console.log("User is not authenticated. Please sign in to place an order.");
    }
  };

  // Function to generate time slots
  const generateTimeSlots = () => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const availableStartTime = 1130; // 11:30 AM in military time
    const availableEndTime = (currentDay === 5 || currentDay === 6) ? 2045 : 1945; // Friday, Saturday: 8:45 PM, other days: 7:45 PM
    const orderStartTime = 1130; // 11:30 AM in military time

    const timeSlots = availableTimes[currentDay]; // Use the hard-coded times for the current day

    // Conditionally render the "ASAP" radio button
    const showASAPRadio = now.getHours() * 100 + now.getMinutes() <= availableEndTime;

    if (currentDay === 0 || (now.getHours() * 100 + now.getMinutes() >= availableEndTime)) {
      // If it's Sunday or past the available pickup times, set the next day to Monday (1)
      currentDay = 1;
    }

    // Check if it's too early to order (before 11:30 AM)
    if (now.getHours() * 100 + now.getMinutes() < orderStartTime) {
      return { timeSlots, showASAPRadio, showNotice: true };
    }

    return { timeSlots, showASAPRadio, showNotice: false };
  };

  const { timeSlots, showASAPRadio } = generateTimeSlots(); // Destructure the values

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
              value={customerInfo["directions"]}
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
          <div className="form-group">
          {!showASAPRadio && (
            <p className="order-notice">
              We apologize but we are no longer accepting orders for today.<br />
              Order pickup times are available for tomorrow.
            </p>
          )}
          <label>Select Pickup Time</label>
          <div className="radio-group">
            {showASAPRadio && (
              <label>
                <input
                  type="radio"
                  name="pickupTimeOption"
                  value="asap"
                  checked={customerInfo.pickupTimeOption === 'asap'}
                  onChange={handleChange}
                />
                ASAP
              </label>
            )}
            <label>
              <input
                type="radio"
                name="pickupTimeOption"
                value="later"
                checked={customerInfo.pickupTimeOption === 'later'}
                onChange={handleChange}
              />
              Pickup Later
            </label>
          </div>
          {customerInfo.pickupTimeOption === 'later' && (
            <select name="pickupTime" value={customerInfo.pickupTime} onChange={handleChange} required>
              <option value="" disabled>
                Select Pickup Time
              </option>
              {timeSlots.map((timeSlot, index) => (
                <option key={index} value={timeSlot}>
                  {timeSlot}
                </option>
              ))}
            </select>
          )}
          <button type="submit" disabled={!isAuthenticated}>
            Place Order
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Cart;
