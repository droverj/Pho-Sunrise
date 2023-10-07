import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  directions: yup.string(),
});

const PaymentForm = ({ onSubmit, onSubmitOrder, subtotal, total, cart, totalItems }) => {
  const [validationErrors, setValidationErrors] = useState({});
  const stripe = useStripe();
  const elements = useElements();

  const [orderInfo, setOrderInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    directions: '',
  });

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Validate the billing information
    try {
      await validationSchema.validate(customerInfo, { abortEarly: false });
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

    const { name, email, phoneNumber } = customerInfo;

    // Use Stripe.js to create a payment method
    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name,
        email,
        phone: phoneNumber,
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

  const handleOrderSubmit = () => {
    const orderData = {
      ...orderInfo,
      cart,
      subtotal,
      total,
      quantity: totalItems,
    };

    onSubmitOrder(orderData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
    setOrderInfo({
      ...orderInfo,
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
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={customerInfo.phoneNumber}
          onChange={handleInputChange}
          required
        />
        {validationErrors.phoneNumber && (
          <p className="error">{validationErrors.phoneNumber}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="directions">Note From Customer</label>
        <textarea
          id="directions"
          name="directions"
          value={customerInfo.directions}
          rows="4"
          placeholder="Please inform us of any allergies or special requests here."
          onChange={handleInputChange}
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
      <button type="submit" onClick={handleOrderSubmit}>Submit Payment</button>
    </form>
  );
};

export default PaymentForm;
