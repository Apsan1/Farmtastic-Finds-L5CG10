import React from 'react'
import SaleProducts from './components/SaleProducts.jsx'
import { CartProviders } from './context/cart.jsx'
import Homepage_navbar from "./components/homepage_navbar";
import { Shopbreadcrum } from './components/breadcrumbs/breadcrumbs.jsx';

const Shoppage = () => {
        return (
            <CartProviders>
                <Homepage_navbar />
                <Shopbreadcrum />
                <SaleProducts />
            </CartProviders>
        );
    }

export default Shoppage