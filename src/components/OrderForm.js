import React, { useState } from 'react';

const OrderForm = ({ setOrderData, setOrderItems, setStep, userId, subtotal, total, cart, totalItems }) => {
  const [validationErrors, setValidationErrors] = useState({});

  const formattedSubtotal = parseFloat(subtotal);
  const formattedTotal = parseFloat(total);
  const formattedCart = cart.map(item => ({
    ...item,
    price: parseFloat(item.price),
  }));

  const [orderInfo, setOrderInfo] = useState({
    name: '',
    email: '',
    phone_number: '',
    instructions: '',
  });

  const handleOrderSubmit = (event) => {
    event.preventDefault();

    const orderData = {
      ...orderInfo,
      user_id: userId,
      cart: formattedCart,
      subtotal: formattedSubtotal,
      total: formattedTotal,
      items_quantity: totalItems,
    };

    const orderItems = cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      name: item.name,
      item_option: item.item_option,
      price: parseFloat(item.price),
    }));

    setOrderData(orderData);
    setOrderItems(orderItems);
    setStep(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderInfo({
      ...orderInfo,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleOrderSubmit}>
      <div className='order-form'>
        <p>Contact Info</p>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={orderInfo.name}
            onChange={handleInputChange}
            placeholder='name'
            required
          />
          <br />
          <label htmlFor="name">Name</label>
          {validationErrors.name && (
            <p className="error">{validationErrors.name}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={orderInfo.email}
            onChange={handleInputChange}
            placeholder='email'
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          {validationErrors.email && (
            <p className="error">{validationErrors.email}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={orderInfo.phone_number}
            onChange={handleInputChange}
            placeholder='phone number'
            required
          />
          <br />
          <label htmlFor="phone_number">Phone Number</label>
          {validationErrors.phone_number && (
            <p className="error">{validationErrors.phone_number}</p>
          )}
        </div>
        <p>Instructions</p>
        <div className="form-group">
          <textarea
            id="directions"
            name="directions"
            value={orderInfo.directions}
            rows="4"
            placeholder="Please inform us of any allergies or special requests here."
            onChange={handleInputChange}
          />
        </div>
        <p style={{ fontSize: '.7rem', fontWeight: '400', margin: 0 }}>Some dishes may contain traces of shellfish or peanuts.**</p>
        <button type="submit">Proceed to Payment</button>
      </div>
    </form>
  );
};

export default OrderForm;
