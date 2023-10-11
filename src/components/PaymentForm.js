import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ amount, onSubmitOrder, setStep, setStatus, setCurrentTime, orderData, orderItems }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);

  // Define initial state for form fields
  const initialFormState = {
    firstName: '',
    lastName: '',
    initial: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    region: '',
    country: '',
    postalCode: '',
    email: '',
    phone: '',
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Cardholder's Formatted Name - with or without middle initial 
    const name = [formData.firstName, formData.initial, formData.lastName]
      .filter(Boolean)
      .join(' ');

    const billingDetails = {
      name, // Cardholder's name
      address: {
        line1: formData.addressLine1,
        line2: formData.addressLine2,
        city: formData.city,
        region: formData.region,
        country: formData.country.toUpperCase(),
        postal_code: formData.postalCode,
      },
      email: formData.email, // Cardholder's email (optional)
      phone: formData.phone, // Cardholder's phone number (optional)
    };

    // Create a PaymentMethod with billing details
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails,
    });

    if (error) {
      console.error(error);
      setPaymentError(error.message);
    } else {
      // Send the paymentMethod.id and the order total to your server for processing
      try {
        const response = await fetch('http://localhost:8080/api/stripe/process-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
            amount,
          }),
        });

        if (response.ok) {
          // Payment succeeded, handle success on the frontend (e.g., show a confirmation message)
          console.log('Payment succeeded!');

          // Clear form fields on successful payment
          onSubmitOrder(orderData, orderItems);
          setFormData(initialFormState);
          setStep(3);
          setStatus(true);
          setCurrentTime(getCurrentTime());
        } else {
          // Payment failed on the server, handle the error
          setStep(3);
          setStatus(false);
          console.error('Payment failed on the server');
          setPaymentError('Payment failed on the server');
        }
      } catch (error) {
        // Handle network errors or other issues
        console.error('Error sending payment to the server:', error);
        setPaymentError('Error sending payment to the server');
      }
    }
  };

  const handleInputChange = (event) => {
    // Update form field values as they change
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Get hours (0-23)
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Get seconds
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Cardholder's Name</p>
      <div className="form-group">
        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
        <label>First Name *</label>
      </div>
      <div className="form-group">
        <input type="text" name="initial" value={formData.initial} onChange={handleInputChange} />
        <label>Initial</label>
      </div>
      <div className="form-group">
        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
        <label>Last Name *</label>
      </div>
      <div className="form-group">
      <p>Cardholder's Email</p>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <p>Cardholder's Phone Number</p>
        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <p>Billing Address</p>
        <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleInputChange} required />
        <label>Line 1 *</label>
        <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleInputChange} />
        <label>Line 2</label>
      </div>
      <div className="form-group">
        <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
        <label>City</label>
      </div>
      <div className="form-group">
        <input type="text" name="region" value={formData.region} onChange={handleInputChange} required />
        <label>Province</label>
      </div>
      <div className="form-group">
        <input type="text" name="country" value={formData.country} onChange={handleInputChange} required maxLength="2" />
        <label>Country</label>
      </div>
      <div className="form-group">
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} required />
        <label>Postal Code</label>
      </div>
      <div className="form-group">
        <label>Card Details</label>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>
      {paymentError && (
        <div className="error-message">
          Payment failed: {paymentError}
        </div>
      )}
      <button type="submit">
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;
