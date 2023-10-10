import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Collect additional cardholder information
    const billingDetails = {
      name: event.target.name.value, // Cardholder's name
      address: {
        line1: event.target.address.value, // Billing address
        postal_code: event.target.postalCode.value,
      },
      email: event.target.email.value, // Cardholder's email (optional)
      phone: event.target.phone.value, // Cardholder's phone number (optional)
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Cardholder's Name</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <label>Billing Address</label>
          <input type="text" name="address" required />
        </div>
        <div className="form-group">
          <label>Postal Code</label>
          <input type="text" name="postalCode" required />
        </div>
        <div className="form-group">
          <label>Email (optional)</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label>Phone Number (optional)</label>
          <input type="tel" name="phone" />
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
