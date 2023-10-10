import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { paymentFormSchema } from '../utilities/validationSchemas';

const PaymentForm = ({amount}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create a PaymentMethod
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
      setPaymentError(error.message);
    } else {
      // Send the paymentMethod.id to the server for processing
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
        console.error('Error sending payment to server:', error);
        setPaymentError('Error sending payment to server');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
