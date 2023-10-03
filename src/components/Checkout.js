import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Checkout = () => {
  const { cart, totalItems, subtotal } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    telephone: '',
    directions: '',
  });

  const { isAuthenticated, user } = useAuth0(); // Destructure the user variable

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  const calculateHST = () => {
    return subtotal * 0.13; // 13% HST for Ontario
  };

  const calculateGST = () => {
    return subtotal * 0.05; // 5% GST for Ontario
  };

  const calculateTotal = () => {
    const hst = calculateHST();
    const gst = calculateGST();
    return subtotal + hst + gst;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const total = calculateTotal();

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
        subtotal: subtotal.toFixed(2),
        total: total.toFixed(2),
        items: totalItems,
      };

      // Perform your order processing logic here
      console.log("Order Data:", orderData);
    } else {
      // Handle the case where the user is not authenticated
      // Display a message or take appropriate action
      console.log("User is not authenticated. Please sign in to place an order.");
    }
  };

  return (
    <div className="order-form">
    <h1 className="order-form-heading">Enter Your Information</h1>
    <p>Please inform us of any allergies prior to ordering. Thank you!</p>
    {!isAuthenticated && (
      <p>Please sign in to place an order from Phở Sunrise.</p>
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
          placeholder="Any allergies or special instructions..."
        ></textarea>
      </div>
      {isAuthenticated && (
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            readOnly
          />
        </div>
      )}
      <div className="order-details">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>HST: ${calculateHST().toFixed(2)}</p>
        <p>GST: ${calculateGST().toFixed(2)}</p>
      </div>
      <p className="order-total">Total: ${calculateTotal().toFixed(2)}</p>
      <div className="button-container">

        <Link to="/checkout">
          <button className="place-order-button" disabled={!isAuthenticated}>
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </form>
  </div>
  );
}

export default Checkout;