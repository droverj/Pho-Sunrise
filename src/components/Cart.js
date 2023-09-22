import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import '../styles/Cart.scss';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    pickupTimeOption: 'asap', // Change 'now' to 'asap'
    pickupTime: '', // To store selected pickup time
  });

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
    // Handle form submission and order placement logic here
  };

  // Function to generate time slots
  const generateTimeSlots = () => {
    const now = new Date();
    const availableDays = [0, 2, 3, 6]; // Tuesday, Wednesday, Thursday, Sunday
    const availableStartTime = 1130; // 11:30 AM in military time
    let availableEndTime = now.getDay() === 5 || now.getDay() === 6 ? 2030 : 1930; // Friday, Saturday: 8:30 PM, other days: 7:30 PM
    const timeSlots = [];

    // Calculate the earliest available time
    const earliestTime = Math.max(
      now.getHours() * 100 + now.getMinutes() + 30, // At least 30 minutes from now
      availableStartTime
    );

    for (let time = earliestTime; time <= availableEndTime; time += 30) {
      const hours = Math.floor(time / 100);
      const minutes = time % 100;
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedTime =
        hours % 12 === 0
          ? `12:${minutes === 0 ? '00' : minutes} ${ampm}`
          : `${hours % 12}:${minutes === 0 ? '00' : minutes} ${ampm}`;
      timeSlots.push(formattedTime);
    }

    // Check if it's too late to order for today (after availableEndTime)
    if (now.getHours() * 100 + now.getMinutes() > availableEndTime) {
      // It's too late to order for today, so show available times for the next day
      // Update availableEndTime for the next day (e.g., 7:30 PM)
      availableEndTime = 1930;
      // Generate time slots for the next day
      for (let time = availableStartTime; time <= availableEndTime; time += 30) {
        const hours = Math.floor(time / 100);
        const minutes = time % 100;
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedTime =
          hours % 12 === 0
            ? `12:${minutes === 0 ? '00' : minutes} ${ampm}`
            : `${hours % 12}:${minutes === 0 ? '00' : minutes} ${ampm}`;
        timeSlots.push(formattedTime);
      }
    }

    // Conditionally render the "ASAP" radio button
    const showASAPRadio = now.getHours() * 100 + now.getMinutes() <= availableEndTime;

    return { timeSlots, showASAPRadio };
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
            <label>Pickup Time</label>
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
          </div>
          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
