import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import OrderForm from './OrderForm';
import PaymentStatus from './PaymentStatus';
import { useCart } from '../components/CartContext';
import stripePromise from '../utilities/stripe';

const HST_RATE = 0.13; // 13% HST for Ontario
const GST_RATE = 0.05; // 5% GST for Ontario
const API_BASE_URL = 'http://localhost:8080/api';

const Checkout = ({ userId }) => {
  const [step, setStep] = useState(1); // Step 1: OrderForm, Step 2: PaymentForm, Step 3: PaymentStatus
  const [orderData, setOrderData] = useState(null);
  const [status, setStatus] = useState(true);
  const [currentTime, setCurrentTime] = useState([]);

  const { cart, totalItems, subtotal } = useCart();
  const total = calculateTotal(subtotal);
  const totalInCents = total * 100;

  async function handleNetworkError(error) {
    console.error('Network error:', error);
    // Handle network errors
  }

  function handleHttpError(response) {
    console.error('Error:', response.statusText);
    // You can also parse the response body for more specific error details if your server sends them
  }

  async function submitOrder(orderData, orderItems) {
    try {
      // Step 1: Submit the order data to the "/orders" endpoint
      const orderResponse = await fetch(`${API_BASE_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (orderResponse.ok) {
        const orderResponseData = await orderResponse.json();
        console.log('Order submitted successfully');

        // Step 2: Extract the order_id from the response
        const orderId = orderResponseData.order.id;

        // Step 3: Iterate through the order items and send each one to the "/order-items" endpoint
        for (const orderItem of orderItems) {
          const orderItemResponse = await fetch(`${API_BASE_URL}/order-items`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              order_id: orderId,
              item_id: orderItem.id,
              quantity: orderItem.quantity,
              item_name: orderItem.name,
              item_option: orderItem.item_option,
              price: orderItem.price,
            }),
          });

          if (!orderItemResponse.ok) {
            handleHttpError(orderItemResponse);
            return; // Handle the error and optionally break the loop if needed
          }
        }

        // Handle any further actions or redirects
      } else {
        handleHttpError(orderResponse);
      }
    } catch (error) {
      handleNetworkError(error);
    }
  }

  async function onSubmitOrder(orderData, orderItems) {
    await submitOrder(orderData, orderItems);
    console.log('orderData: ', orderData);
    console.log('orderItems: ', orderItems);
    // Handle further actions or redirects after submitting the order
  }

  function calculateTotal(subtotal) {
    const subtotalNumber = parseFloat(subtotal);
    const hstNumber = parseFloat(calculateTax(subtotalNumber, HST_RATE));
    const gstNumber = parseFloat(calculateTax(subtotalNumber, GST_RATE));
    const totalNumber = subtotalNumber + hstNumber + gstNumber;
    return totalNumber.toFixed(2);
  }

  function calculateTax(subtotal, rate) {
    return (subtotal * rate).toFixed(2);
  }

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Get hours (0-23)
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Get seconds
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="checkout">
      {step === 1 && (
        <div>
          <h1 className="form-heading">Enter Your Contact Information</h1>
          <p>Please inform us of any allergies prior to ordering. Thank you!</p>
          <div className="order-details">
            <p>Subtotal: ${subtotal}</p>
            <p>HST: ${calculateTax(subtotal, HST_RATE)}</p>
            <p>GST: ${calculateTax(subtotal, GST_RATE)}</p>
          </div>
          <p className="order-total">Total: ${total}</p>
          <OrderForm
            userId={userId}
            onSubmitOrder={onSubmitOrder}
            subtotal={subtotal}
            total={total}
            cart={cart}
            totalItems={totalItems}
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <h1 className="form-heading">Enter Your Billing Information</h1>
          <div className="order-details">
            <p>Subtotal: ${subtotal}</p>
            <p>HST: ${calculateTax(subtotal, HST_RATE)}</p>
            <p>GST: ${calculateTax(subtotal, GST_RATE)}</p>
          </div>
          <p className="order-total">Total: ${total}</p>
          <Elements stripe={stripePromise}>
            <PaymentForm amount={totalInCents} />
          </Elements>
        </div>
      )}
      {step === 3 && <PaymentStatus status={status} currentTime={currentTime} />}
    </div>
  );
};

export default Checkout;
