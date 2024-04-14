import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Hero from './components/Hero.jsx';
import Homepage_navbar from "./components/homepage_navbar";
import Mob_homepage_nav from "./components/Mob_homepage_nav.jsx";
import { CartProviders } from './context/cart.jsx';
import Shoppage from './shoppage.jsx';
import VideoBackground from './components/video-background.jsx';
import Footer from './components/footer.jsx';
import Cart from './cart.jsx';

const RouterPaths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/shop" element={<ShopComponent />} />
        <Route path="/cart" element={<CartComponent />} />
      </Routes>
    </Router>
  )
}

const MainComponent = () => {
  return (
    <React.StrictMode>
      <CartProviders>
        <Homepage_navbar />
        <Mob_homepage_nav />
        <VideoBackground />
        <Hero />
        <Footer />
      </CartProviders>
    </React.StrictMode>
  );
};

const ShopComponent = () => {
  return (
    <React.StrictMode>
      <CartProviders>
        <Shoppage />
      </CartProviders>
    </React.StrictMode>
  );
};

const CartComponent = () => {
  return (
    <React.StrictMode>
      <CartProviders>
        <Cart />
      </CartProviders>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<RouterPaths />);