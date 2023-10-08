import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import './App.scss';

function App() {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuth0();

  const userId = user ? user.sub : null;

  // API data
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsResponse = await axios.get('http://localhost:8080/api/items');
        setItems(itemsResponse.data);

        const ordersResponse = await axios.get('http://localhost:8080/api/orders');
        setOrders(ordersResponse.data);

        const orderItemsResponse = await axios.get('http://localhost:8080/api/order-items');
        setOrderItems(orderItemsResponse.data);

        const reviewsResponse = await axios.get('http://localhost:8080/api/reviews');
        setReviews(reviewsResponse.data);

        // All data has been fetched
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors here (e.g., display error message to the user)
      }
    };

    fetchData();
  }, []);

  const updateReviews = async () => {
    try {
      // Make a GET request to fetch the latest reviews from the server
      const reviewsResponse = await axios.get('http://localhost:8080/api/reviews');
      const updatedReviews = reviewsResponse.data;
  
      // Update the state with the latest reviews
      setReviews(updatedReviews);
    } catch (error) {
      console.error('Error fetching updated reviews:', error);
    }
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.name !== item.name);
    setCart(updatedCart);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <div className="main-body">
          {isLoading ? (
            <p>Loading...</p> // replace this with a loading spinner
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout userId={userId} />} />
              <Route
                path="/contact"
                element={<Contact userId={userId} reviews={reviews} updateReviews={updateReviews} />}
              />
              <Route
                path="/menu"
                element={<Menu items={items} addToCart={addToCart} removeFromCart={removeFromCart} />}
              />
              <Route
                path="/cart"
                element={<Cart cart={cart} removeFromCart={removeFromCart} />}
              />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
