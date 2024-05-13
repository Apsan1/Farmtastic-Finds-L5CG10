import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Hero from './components/Hero.jsx';
import Homepage_navbar from "./components/homepage_navbar";
import Mob_homepage_nav from "./components/Mob_homepage_nav.jsx";
import { CartProviders } from './context/cart.jsx';
import Shoppage  from './shoppage.jsx';
import VideoBackground from './components/video-background.jsx';
import Footer from './components/footer.jsx';
import Cart from './cart.jsx';
import ProductDetails from './ProductDetails.jsx';
import { SaleProductsFilteredByCategory } from './components/SaleProducts.jsx';
import Admin from './components/admin.jsx';
import Checkout from './components/checkout.jsx';
import { SaleProductsFilteredBySearch } from './components/SaleProducts.jsx';
import {DefaultOutput, Error, Success } from './components/outputPage.jsx';
import Dashboard from './admin_dashboard.jsx';
import Orders from './components/Order.jsx';
import AddProduct from './components/AddProductForm.jsx';
import ProductList from './components/Product_list.jsx';
import ProfileSettings from './components/ProfileSettings.jsx';

const RouterPaths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/shop" element={<ShopComponent />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/admin/login" element={<AdminComponent />} />
        <Route path="/product/:id" element={<ProductDetailsComponent />} />
        <Route path="/category/:category" element={<SaleProductsFilteredByCategoryComponent />} />
        <Route path="/search/:search" element={<SearchPageComponent />} />
        <Route path="/checkout/:total" element={<CheckoutComponent />} />
        <Route path="/*" element={<OutputPage />} />
        <Route path="/success" element={<OutputPage type="success" />} />
        <Route path="/error" element={<OutputPage type="error" />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
        <Route path="/order" element={<OrderComponent />} />
        <Route path="/add_product" element={<AddProductComponent />} />
        <Route path="/product_list" element={<ProductListComponent />} />
        <Route path="/profile" element={<ProfileComponent />} />

      </Routes>
    </Router>
  )
}

const MainComponent = () => {
  return (
    <React.StrictMode>
      <CartProviders>
        <Homepage_navbar />
        <VideoBackground />
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

const CartComponent = () => {
  return (
    <React.StrictMode>
      <CartProviders>
      <Homepage_navbar />
        <Cart />
      </CartProviders>
    </React.StrictMode>
  );
};

const ProductDetailsComponent = () => {
  return (
    <React.StrictMode>
      <CartProviders>
        <Homepage_navbar />
        <ProductDetails />
      </CartProviders>
    </React.StrictMode>
  );
}

const SaleProductsFilteredByCategoryComponent = () => {
  return (
    <React.StrictMode>
      <CartProviders>
        <Homepage_navbar />
        <SaleProductsFilteredByCategory />
      </CartProviders>
    </React.StrictMode>
  );
}
const AdminComponent=()=>{
  return(
    <React.StrictMode>
      <Admin></Admin>
    </React.StrictMode>
  )
}

const CheckoutComponent=()=>{
  return(
    <React.StrictMode>
      <Checkout></Checkout>
    </React.StrictMode>
  )
}

const SearchPageComponent = () => {
  return (
    <React.StrictMode>
      <CartProviders>
        <Homepage_navbar />
        <SaleProductsFilteredBySearch />
      </CartProviders>
    </React.StrictMode>
  );
};

const OutputPage = ({ type }) => {
  return (
    <React.StrictMode>
      <CartProviders>
        <Homepage_navbar />
        {type === 'success' && <Success />}
        {type === 'error' && <Error />}
        {type !== 'success' && type !== 'error' && <DefaultOutput />}
      </CartProviders>
    </React.StrictMode>
  );
}

const DashboardComponent=()=>{
  return(
    <React.StrictMode>
      <Dashboard />
    </React.StrictMode>
  )
}
const OrderComponent=()=>{
  return(
    <React.StrictMode>
      <Orders />
    </React.StrictMode>
  )
}
const AddProductComponent=()=>{
  return(
    <React.StrictMode>
      <AddProduct />
    </React.StrictMode>
  )
}
const ProductListComponent=()=>{
  return(
    <React.StrictMode>
      <ProductList />
    </React.StrictMode>
  )
}
const ProfileComponent=()=>{
  return(
    <React.StrictMode>
      <ProfileSettings/>
    </React.StrictMode>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<RouterPaths />);
