import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { useCart } from '../components/CartContext';
import PaymentForm from './PaymentForm';
import stripePromise from '../utilities/stripe';
import OrderForm from './OrderForm';
import PaymentStatus from './PaymentStatus';
import '../styles/Checkout.scss';

const HST_RATE = 0.13; // 13% HST for Ontario
const GST_RATE = 0.05; // 5% GST for Ontario
const API_BASE_URL = 'http://localhost:8080/api';

const Checkout = ({ userId }) => {
  const [step, setStep] = useState(1); // Step 1: OrderForm, Step 2: PaymentForm, Step 3: PaymentStatus
  const [orderData, setOrderData] = useState(null);
  const [orderItems, setOrderItems] = useState(null);
  const [status, setStatus] = useState(true);
  const [currentTime, setCurrentTime] = useState([]);

  const { cart, totalItems, subtotal } = useCart();
  const total = calculateTotal(subtotal);
  const totalInCents = Math.round(total * 100)

  async function handleNetworkError(error) {
    console.error('Network error:', error);
  }

  function handleHttpError(response) {
    console.error('Error:', response.statusText);
  }

  async function onSubmitOrder(orderData, orderItems) {
    console.log("Order Data: ", orderData);
    console.log("Order items: ", orderItems);
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

  return (
    <div className='checkout'>
      {step === 1 && (
        <div className='price-and-form-container'>
          <div className="price-summary">
            <Link to="/cart">
              <button>Return to Cart</button>
            </Link>
            <p>Subtotal: ${subtotal}</p>
            <p>HST: ${calculateTax(subtotal, HST_RATE)}</p>
            <p>GST: ${calculateTax(subtotal, GST_RATE)}</p>
            <p className="order-total">Total: ${total}</p>
          </div>
          <div className='form-container'>
            <div>
              <h2 className="form-heading">Enter Your Contact Information</h2>
              <p>Please inform us of any allergies prior to ordering.</p>
              <OrderForm
                userId={userId}
                setOrderData={setOrderData}
                setOrderItems={setOrderItems}
                setStep={setStep}
                subtotal={subtotal}
                total={total}
                cart={cart}
                totalItems={totalItems}
              />
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className='price-and-form-container'>
          <div className="price-summary">
            <button onClick={() => setStep(1)}>Return to Customer Details</button>
            <p className="order-total">Total: ${total}</p>
          </div>
          <div className='form-container'>
            <h2 className="form-heading">Enter Your Billing Information</h2>
            <Elements stripe={stripePromise}>
              <PaymentForm
                amount={totalInCents}
                onSubmitOrder={onSubmitOrder}
                setStep={setStep}
                setStatus={setStatus}
                setCurrentTime={setCurrentTime}
                orderData={orderData}
                orderItems={orderItems}
              />
            </Elements>
          </div>
        </div>
      )}
      {step === 3 &&
        <PaymentStatus
          status={status}
          setStep={setStep}
          currentTime={currentTime}
        />
      }
    </div>
  );
};

export default Checkout;
