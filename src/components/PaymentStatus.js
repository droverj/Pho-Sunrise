import React from 'react';

const PaymentStatus = ({ status, currentTime }) => {
  return (
    <div className='payment-status'>
      {status ? (
        <div className='complete'>
          <h3>Your payment was accepted at {currentTime}.</h3>
          <p>Your order will be ready in 20 - 25 minutes.</p>
          <p>Feel free to call us at (519) 579-2016 with any questions.</p>
        </div>
      ) : (
        <div className='incomplete'>
          <h3>Payment processing incomplete.</h3>
          <p>Return to the payment form.</p>
          <p>Feel free to call us at (519) 579-2016 with any questions.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentStatus;
