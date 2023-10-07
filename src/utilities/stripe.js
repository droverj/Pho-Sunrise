// stripe.js
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51MnhUnKSHW6cmLsUaHQHwbjAMK7LelkF2h7QfdRKiq9SCCh2LZgp1Wmkj9ayGdB476Q7RuHZQIFFrXxpHRYaJiIR00uzRzjFD9');

export default stripePromise;