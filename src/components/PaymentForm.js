import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet.
      return;
    }

    // Get a reference to the CardElement
    const cardElement = elements.getElement(CardElement);

    // Use Stripe.js to create a token or payment method
    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (result.error) {
      // Handle errors (e.g., card validation failed)
      console.error(result.error.message);
    } else {
      // Payment method created successfully
      console.log(result.paymentMethod);
      setPaymentMethod(result.paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <CardElement
          options={{
            // Customize the CardElement styles here
          }}
        />
      </label>
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;