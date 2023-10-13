import React from 'react';

const PaymentStatus = ({ status, currentTime, setStep }) => {

  return (
    <div className='payment-status'>
      {status ? (
        <div className='complete'>
          <h3>Your payment was accepted at {currentTime}.</h3>
          <p>Your Phở Sunrise order will be ready for pickup in approximately 20 - 25 minutes.</p>
          <div className='pickup-location'>
          <p>Your pickup location:</p>
          <span>1400 Ottawa Street South – Unit </span>
          <span>Kitchener, ON, Canada</span>
          </div>
          <p>Feel free to call us at (519) 579-2016 with any questions.</p>
        </div>
      ) : (
        <div className='incomplete'>
          <h3>Payment processing incomplete.</h3>
          <p>Return to the payment form.</p>
          <p>Feel free to call us at (519) 579-2016 with any questions.</p>
          <button onClick={() => setStep(2)}>Return to Payment Form</button>
        </div>
      )}
    </div>
  );
};

export default PaymentStatus;
