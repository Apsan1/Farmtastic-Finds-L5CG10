import React from 'react'
import Category from './components/Category.jsx'
import Trending_products from './components/Trending_products.jsx'
import SaleProducts from './components/SaleProducts.jsx'
import { CartProviders } from './context/cart.jsx'
import Homepage_navbar from "./components/homepage_navbar";

const Shoppage = () => {
        return (
            <CartProviders>
                <Homepage_navbar />
                <SaleProducts />
            </CartProviders>
        );
    }

export default Shoppage