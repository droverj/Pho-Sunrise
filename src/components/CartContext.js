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
  // Load cart data from local storage if available
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

  const [cart, setCart] = useState(initialCart);


  const calculateTotalItems = () => {
    const total = cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    return total;
  };

  const emptyCart = () => {
    setCart([]);
  };

  const calculateSubtotal = () => {
    const subtotal = cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);
    return subtotal;
  };

  useEffect(() => {
    // Save cart data to local storage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    console.log(item);
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.optionId === item.optionId);
  
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const basePrice = parseFloat(item.base_price);
      const price = basePrice + (item.price_adjustment || 0);
      
      setCart([...cart, { ...item, quantity: 1, price }]);
    }
  };
  

  const removeFromCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems: calculateTotalItems(), subtotal: calculateSubtotal(), emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};
