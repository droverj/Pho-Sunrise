import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone_number: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  directions: yup.string(),
});

const PaymentForm = ({ onSubmit, onSubmitOrder, userId, subtotal, total, cart, totalItems }) => {
  const [validationErrors, setValidationErrors] = useState({});
  const stripe = useStripe();
  const elements = useElements();

  const formattedSubtotal = parseFloat(subtotal);
  const formattedTotal = parseFloat(total);
  const formattedCart = cart.map(item => ({
    ...item,
    price: parseFloat(item.price),
  }));


  console.log(userId);

  const [orderInfo, setOrderInfo] = useState({
    user_id: userId,
    name: '',
    email: '',
    phone_number: '',
    instructions: '',
  });

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

  const handleOrderSubmit = () => {
    const orderData = {
      ...orderInfo,
      cart: formattedCart,
      subtotal: formattedSubtotal,
      total: formattedTotal,
      items_quantity: totalItems,
    };

    const orderItems = cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      name: item.name,
      price: parseFloat(item.price),
    }));

    onSubmitOrder(orderData, orderItems);
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
    <div>
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
    <button type="submit" onClick={handleOrderSubmit}>Submit Order</button>
    </div>
  );
};

export default PaymentForm;
