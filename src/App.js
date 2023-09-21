import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import CartPage from './components/CartPage';
import CartProvider from './components/CartContext';
import './App.scss';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log('Adding item to cart:', item);
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.name !== item.name);
    setCart(updatedCart);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu addToCart={addToCart} removeFromCart={removeFromCart} />} />
            <Route
              path="/cart"
              element={<CartPage cart={cart} removeFromCart={removeFromCart} />} // Render CartPage component
            />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
