// CartContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [isCartEmpty, setIsCartEmpty] = useState(true); // Flag to track if the cart is empty

  useEffect(() => {
    const addedCount = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalItems(addedCount);
    setIsCartEmpty(cart.length === 0); // Update the flag based on cart length
  }, [cart]);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setIsCartEmpty(false); // Cart is not empty after adding an item
  };

  const removeFromCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingItemIndex].quantity > 0) {
        updatedCart[existingItemIndex].quantity -= 1;
        setCart(updatedCart);
        if (updatedCart[existingItemIndex].quantity === 0) {
          updatedCart.splice(existingItemIndex, 1); // Remove the item if quantity becomes 0
          setIsCartEmpty(updatedCart.length === 0); // Check if cart becomes empty
        }
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems, isCartEmpty }}>
      {children}
    </CartContext.Provider>
  );
};
