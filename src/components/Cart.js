import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSurprise } from '@fortawesome/free-solid-svg-icons';
import '../styles/Cart.scss';

const Cart = () => {
  const { cart, addToCart, removeFromCart, totalItems, subtotal } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    telephone: '',
    directions: '',
  });

  const { isAuthenticated, user } = useAuth0(); // Destructure the user variable

  const handleAdd = (cartItem) => {
    addToCart(cartItem);
  };

  const handleRemove = (cartItem) => {
    removeFromCart(cartItem);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  const calculateHST = () => {
    return subtotal * 0.13; // 13% HST for Ontario
  };

  const calculateGST = () => {
    return subtotal * 0.05; // 5% GST for Ontario
  };

  const calculateTotal = () => {
    const hst = calculateHST();
    const gst = calculateGST();
    return subtotal + hst + gst;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const total = calculateTotal();

    // Check if the user is authenticated and retrieve their email
    if (isAuthenticated) {
      const userEmail = user.email; // Get user's email
      // Include userEmail in your form data when submitting
      const orderData = {
        name: customerInfo.name,
        email: userEmail, // Include the user's email
        telephone: customerInfo.telephone,
        directions: customerInfo.directions,
        cart: cart,
        subtotal: subtotal.toFixed(2),
        total: total.toFixed(2),
        totalItems: totalItems,
      };

      // Perform your order processing logic here
      console.log("Order Data:", orderData);
    } else {
      // Handle the case where the user is not authenticated
      // Display a message or take appropriate action
      console.log("User is not authenticated. Please sign in to place an order.");
    }
  };

  return (
    <div className="cart">
      <div className="cart-items-container">
        {cart.length === 0 ? (
          <div className="empty-cart-container">
            <h2>Your Shopping Cart is Empty</h2><br />
            <FontAwesomeIcon icon={faSurprise} />
            <h3>Browse our menu to begin adding items to your shopping cart.</h3>
          </div>
        ) : (
          <>
          <h2 className="cart-items-heading"> Your Items </h2>
            <ul className="cart-items">
              {cart.map((cartItem, index) => (
                <li className="cart-item" key={index}>
                  <div className="item-info">
                    {cartItem.name} - ${cartItem.price.toFixed(2)}
                  </div>
                  <button onClick={() => handleRemove(cartItem)}>-</button>
                  <button onClick={() => handleAdd(cartItem)}>+</button>
                  <div className="cart-item-quantity">{cartItem.quantity}</div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="order-form">
        <h1 className="order-form-heading">Enter Your Information</h1>
        {!isAuthenticated && (
          <p>Please sign in to place an order from Phở Sunrise.</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={customerInfo.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Phone Number</label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              value={customerInfo.telephone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="directions">Special Requests</label>
            <textarea
              id="directions"
              name="directions"
              value={customerInfo.directions}
              onChange={handleChange}
              rows="4"
              placeholder="Any special instructions or directions..."
            ></textarea>
          </div>
          {isAuthenticated && (
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                readOnly
              />
            </div>
          )}
            <div className="order-details">
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>HST: ${calculateHST().toFixed(2)}</p>
              <p>GST: ${calculateGST().toFixed(2)}</p>
            </div>
              <p className="order-total">Total: ${calculateTotal().toFixed(2)}</p>
            <div className="button-container">
              <button className="place-order-button" type="submit" disabled={!isAuthenticated}>
                Place Order
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;




  // Define the available pickup times for each day
  // const availableTimes = {
  //   0: [ // Sunday
  //     '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  //     '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
  //     '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
  //   ],
  //   1: [], // Monday (closed)
  //   2: [ // Tuesday
  //     '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  //     '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
  //     '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
  //   ],
  //   3: [ // Wednesday
  //     '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  //     '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
  //     '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
  //   ],
  //   4: [ // Thursday
  //     '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  //     '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
  //     '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
  //   ],
  //   5: [ // Friday
  //     '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  //     '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
  //     '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
  //     '8:30 PM', '9:00 PM'
  //   ],
  //   6: [ // Saturday
  //     '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  //     '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
  //     '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
  //     '8:30 PM', '9:00 PM'
  //   ],
  // };
