import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ProductCard from "./ProductCard";
import {fetchProducts, fetchProductsByCategory}  from "./fetchproducts.jsx";

const SaleProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => 
      setProducts(data));
  }, []);

  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 pt-8 gap-6 relative">
        {products.map(product => 
        (
          <ProductCard key={product.id} id={product.id} img={product.imageSrc} name={product.name} price={product.price+ "/kg"} />
        ))}
      </div>
    </div>
  );
};


export const SaleProductsFilteredByCategory = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchProductsByCategory(category).then(data =>
    setProducts(data.filter(product => product.category === category)));
  }
  , [category]);
  if (products.length === 0) {
    return <div>No Products in This Category</div>;
  }
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 pt-8 gap-6 relative">
        {products.map(product => 
        (
          <ProductCard key={product.id} id={product.id} img={product.image} name={product.name} price={product.price+ "/kg"} />
        ))}
      </div>
    </div>
  );
}

export default SaleProducts;
