import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { paymentFormSchema } from '../utilities/validationSchemas';

const PaymentForm = ({ onSubmit }) => {
  const [validationErrors, setValidationErrors] = useState({});
  const stripe = useStripe();
  const elements = useElements();

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone_number: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Validate the billing information
    try {
      await paymentFormSchema.validate(customerInfo, { abortEarly: false });
    } catch (errors) {
      console.error(errors);
      setValidationErrors(
        errors.inner.reduce((acc, error) => {
          acc[error.path] = error.message;
          return acc;
        }, {})
      );
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { name, email, phone_number } = customerInfo;

    // Use Stripe.js to create a payment method
    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name,
        email,
        phone: phone_number,
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
        <label htmlFor="name">Cardholder Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={customerInfo.name}
          onChange={handleInputChange}
          required
        />
        {validationErrors.name && (
          <p className="error">{validationErrors.name}</p>
        )}
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
        {validationErrors.email && (
          <p className="error">{validationErrors.email}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="phone_number">Phone Number</label>
        <input
          type="tel"
          id="phone_number"
          name="phone_number"
          value={customerInfo.phone_number}
          onChange={handleInputChange}
          required
        />
        {validationErrors.phone_number && (
          <p className="error">{validationErrors.phone_number}</p>
        )}
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
