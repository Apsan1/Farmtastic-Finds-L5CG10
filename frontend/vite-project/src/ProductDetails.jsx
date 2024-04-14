import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from './components/breadcrumbs/breadcrumbs'; 
import { CartContext } from './context/cart';
import Homepage_navbar from './components/homepage_navbar';

const ProductDetails = () => {
   
  const { cartItems } = useContext(CartContext);
  const { productId } = useParams();

  const product = cartItems.find((item) => item.id === Number(productId));

  return (
    <div>
      <Homepage_navbar />
      <Breadcrumb product={product} />
      
    </div>
  );
}

export default ProductDetails;
