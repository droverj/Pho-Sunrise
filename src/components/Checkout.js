import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { useCart } from '../components/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import OrderSummary from './OrderSummary';
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
  const HST = calculateTax(subtotal, HST_RATE);
  const GST = calculateTax(subtotal, GST_RATE);

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
        <div>
          <div className='checkout-navigation-container'>
            <Link to="/cart">
              <button className='back-button'>Cart</button>
            </Link>
            <div><FontAwesomeIcon icon={faArrowRightLong} className="right-arrow-icon" style={{ color: 'silver', transform: 'scaleX(1)' }} size="1x" /></div>
            <span>Contact Info</span>
          </div>
          <div className='summary-and-form-container'>
            <OrderSummary />
            <div className='form-container'>
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
        <div>
          <div className='checkout-navigation-container'>
            <Link to="/cart">
              <button className='back-button'>Cart</button>
            </Link>
            <div><FontAwesomeIcon icon={faArrowRightLong} className="right-arrow-icon" style={{ color: 'silver', transform: 'scaleX(1)' }} size="1x" /></div>
            <span>checkout</span>
          </div>
          <div className='form-container'>
            <Elements stripe={stripePromise}>
              <PaymentForm
                subtotal={subtotal}
                HST={HST}
                GST={GST}
                total={total}
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
