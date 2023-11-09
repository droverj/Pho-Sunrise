import React, { useEffect } from 'react';
import { formatTime } from '../utilities/formatTime';

const PaymentStatus = ({ status, currentTime, setStep }) => {

  // Scroll to the top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='payment-status'>
      {status ? (
        <div className='complete'>
          <h3>Your payment was accepted at {formatTime(currentTime)}.</h3>
          <p>Your Phở Sunrise order will be ready for pickup in approximately 20 - 25 minutes.</p>
          <div className='pickup-location'>
            <p>Your pickup location:</p>
            <span>1400 Ottawa Street South – Unit B22 </span><br />
            <span>Kitchener, ON, Canada</span>
          </div>
          <p>Feel free to call us at (519) 579-2016 with any questions regarding your order.</p>
        </div>
      ) : (
        <div className='incomplete'>
          <h3>Payment processing incomplete.</h3>
          <p>Return to the payment form.</p>
          <p>Feel free to call us at (519) 579-2016 with any questions regarding your order.</p>
          <button onClick={() => setStep(2)}>Return to Payment Form</button>
        </div>
      )}
    </div>
  );
};

export default PaymentStatus;
