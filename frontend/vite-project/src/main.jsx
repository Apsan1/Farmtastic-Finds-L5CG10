import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from './components/Hero.jsx'
import Homepage_navbar from "./components/homepage_navbar";
import Mob_homepage_nav from "./components/Mob_homepage_nav.jsx";
import Category from './components/Category.jsx'
import Trending_products from './components/Trending_products.jsx'
import { CartProvider } from 'react-use-cart';
import { CartProviders } from './CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProviders>
        <CartProvider>
        
    <Homepage_navbar />
    <Mob_homepage_nav />
    <Hero />
    <Category />
    <Trending_products />
    </CartProvider>
    <App/>
    </CartProviders>
  </React.StrictMode>,
)
