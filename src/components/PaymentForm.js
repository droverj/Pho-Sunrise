import React, { useState } from 'react';
import { CardElement, useStripe, useElements, AddressElement } from '@stripe/react-stripe-js';

const PaymentForm = ({ subtotal, HST, GST, total, amount, onSubmitOrder, setStep, setStatus, setCurrentTime, orderData, orderItems }) => {
  const [paymentError, setPaymentError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const initialFormState = {
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
    const addressElement = elements.getElement(AddressElement);

    // Extract address details
    const address = addressElement.value;

    // Create a PaymentMethod with card details
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        address,
        email: formData.email,
        phone: formData.phone,
      },
    });

    if (error) {
      console.error(error);
      setPaymentError(error.message);
    } else {
      // Send the paymentMethod.id and order total to your server for processing
      try {
        const response = await fetch('http://localhost:8080/api/stripe/process-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
            amount,
            email: formData.email,
            phone: formData.phone,
          }),
        });

        if (response.ok) {
          // Payment succeeded, handle success on the frontend (e.g., show a confirmation message)
          console.log('Payment succeeded!');

          // Clear form fields on successful payment
          setFormData(initialFormState);
          onSubmitOrder(orderData, orderItems);
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
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='payment-form'>
        <div className="form-group">
          <h4>Billing Details</h4>
          <AddressElement
            options={{
              mode: 'billing',
            }}
          />
        </div>
        <div className="form-group">
          <h4>Card Details</h4>
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
        <div className="form-group">
          <h4>Cardholder Email</h4>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <h4>Cardholder Phone Number</h4>
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
        </div>
        {paymentError && (
          <div className="error-message">
            Payment failed: {paymentError}
          </div>
        )}
      </div>
      <div className="price-summary-container">
        <p>Subtotal: ${subtotal}</p>
        <p>HST: ${HST}</p>
        <p>GST: ${GST}</p>
        <p className="total">Total: ${total}</p>
        <button type="submit">Pay Now</button>
      </div>
    </form>
  );
};


export default PaymentForm;
