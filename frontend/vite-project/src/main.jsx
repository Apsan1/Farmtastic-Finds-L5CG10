import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Hero from './components/Hero.jsx';
import Homepage_navbar from "./components/homepage_navbar";
import Mob_homepage_nav from "./components/Mob_homepage_nav.jsx";
import SaleProducts from './components/SaleProducts.jsx';
import { CartProviders } from './context/cart.jsx';
import Shoppage from './shoppage.jsx';

const RouterPaths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/shop" element={<ShopComponent />} />
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
        <Hero />
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

ReactDOM.createRoot(document.getElementById('root')).render(<RouterPaths />);