import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);

  // Define initial state for form fields
  const initialFormState = {
    name: '',
    addressLine1: '', // Line 1: Billing address
    addressLine2: '', // Line 2: Billing address (optional)
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

    // Collect additional cardholder information
    const billingDetails = {
      name: formData.name, // Cardholder's name
      address: {
        line1: formData.addressLine1, // Line 1: Billing address
        line2: formData.addressLine2, // Line 2: Billing address
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
          setFormData(initialFormState);
        } else {
          // Payment failed on the server, handle the error
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Cardholder's Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Billing Address</label>
          <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleInputChange} required placeholder="Line 1" />
          <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleInputChange} placeholder="Line 2 (optional)" />
        </div>
        <div className="form-group">
          <label>Postal Code</label>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Phone Number (optional)</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
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
        <button type="submit" className="btn btn-primary">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
