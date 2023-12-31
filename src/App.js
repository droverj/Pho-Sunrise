import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { CartProvider } from './providers/CartContext';
import { SupabaseProvider } from './providers/SupabaseContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './components/Home';
import Menu from './components/Menu';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Cart from './components/Cart';
import './App.scss';

function App() {
  const { user } = useAuth0();
  const userId = user ? user.sub : null;

  useEffect(() => {
    // Add an event listener to the window object
    const handleRouteChange = () => {
      document.body.classList.remove('no-scroll');
    };

    // Listen for the "popstate" event, which is triggered when the URL changes
    window.addEventListener('popstate', handleRouteChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <SupabaseProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <div className="main-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout userId={userId} />} />
              <Route
                path="/contact"
                // element={<Contact userId={userId} reviews={reviews} updateReviews={updateReviews} />}
                element={<Contact userId={userId} />}
              />
              <Route
                path="/menu"
                element={<Menu />}
              />
              <Route
                path="/cart"
                element={<Cart />}
              />
              <Route
                path="/temp"
                element={<Cart />}
              // element={<Cart cart={cart} removeFromCart={removeFromCart} />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </SupabaseProvider>
  );
}

export default App;
