import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ProductCard from "./ProductCard";
import {fetchProducts, fetchProductsByCategory}  from "./fetchproducts.jsx";
import { Categorybreadcrum } from "./breadcrumbs/breadcrumbs.jsx";

const SaleProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => 
      setProducts(data));
  }, []);

  return (
    <div className="container mb-40">
      <div className="lg:flex justify-between items-center">
      </div>
      <div className="px-20 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-x-8 gap-y-20">
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
  const categoryArr = category.split("-");
  return (
    <>
    <Categorybreadcrum category={categoryArr} />      {/*Passing category name here*/}
    <div className="container pt-0 mb-10">
      <div className="lg:flex justify-between items-center">
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 pt-3 gap-6 relative">
        {products.map(product => 
        (
          <ProductCard key={product.id} id={product.id} img={product.image} name={product.name} price={product.price+ "/kg"} />
        ))}
      </div>
    </div>
    </>
  );
}

export default SaleProducts;
