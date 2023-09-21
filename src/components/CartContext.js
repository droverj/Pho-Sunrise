import React, { createContext, useContext, useState } from 'react';

// Create a CartContext
const CartContext = createContext();

// Export a custom hook for using the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Define your CartProvider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);
    
    if (existingItemIndex !== -1) {
      // If it exists, increment the quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If it doesn't exist, add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);
    
    if (existingItemIndex !== -1) {
      // If it exists, decrement the quantity
      const updatedCart = [...cart];
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        // If the quantity is 1, remove the item from the cart
        updatedCart.splice(existingItemIndex, 1);
      }
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};