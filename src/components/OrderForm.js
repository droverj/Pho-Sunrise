import React, { useState } from 'react';

const OrderForm = ({ onSubmitOrder, userId, subtotal, total, cart, totalItems }) => {
  const [validationErrors, setValidationErrors] = useState({});

  const formattedSubtotal = parseFloat(subtotal);
  const formattedTotal = parseFloat(total);
  const formattedCart = cart.map(item => ({
    ...item,
    price: parseFloat(item.price),
  }));

  const [orderInfo, setOrderInfo] = useState({
    user_id: userId,
    name: '',
    email: '',
    phone_number: '',
    instructions: '',
  });

  const handleOrderSubmit = (event) => {
    event.preventDefault();

    const orderData = {
      ...orderInfo,
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

    onSubmitOrder(orderData, orderItems);
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
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={orderInfo.name}
          onChange={handleInputChange}
          required
        />
        {validationErrors.name && (
          <p className="error">{validationErrors.name}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={orderInfo.email}
          onChange={handleInputChange}
          required
        />
        {validationErrors.email && (
          <p className="error">{validationErrors.email}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="phone_number">Phone Number</label>
        <input
          type="tel"
          id="phone_number"
          name="phone_number"
          value={orderInfo.phone_number}
          onChange={handleInputChange}
          required
        />
        {validationErrors.phone_number && (
          <p className="error">{validationErrors.phone_number}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="directions">Note From Customer</label>
        <textarea
          id="directions"
          name="directions"
          value={orderInfo.directions}
          rows="4"
          placeholder="Please inform us of any allergies or special requests here."
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;
