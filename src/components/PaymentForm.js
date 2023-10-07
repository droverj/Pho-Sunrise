import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCart } from '../components/CartContext';

const PaymentForm = ({ onSubmit, subtotal, total, cart, totalItems }) => {

  const stripe = useStripe();
  const elements = useElements();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    directions: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { name, email, phoneNumber, directions } = customerInfo;

    // Use Stripe.js to create a payment method
    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name, 
        email, 
        phone: phoneNumber,
        directions,
        cart,
        subtotal,
        total,
        items: totalItems,
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      console.log(result.paymentMethod);
      // Pass the payment method and customer info to the parent component
      onSubmit(result.paymentMethod, customerInfo);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={customerInfo.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={customerInfo.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={customerInfo.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="directions">Note From Customer</label>
        <input
          type="textarea"
          id="directions"
          name="directions"
          value={customerInfo.directions}
          rows="4"
          placeholder="Please inform us of any allergies or special requests here."
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Card details</label>
        <CardElement
          options={{
            // Customize the CardElement styles here
          }}
        />
      </div>
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;
