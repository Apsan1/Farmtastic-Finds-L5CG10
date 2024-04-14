import React, { useState, useEffect } from "react";
import { BsArrowRight } from 'react-icons/bs';
import ProductCard from "./ProductCard";
import fetchProducts  from "./fetchproducts.jsx";

const SaleProducts = () => {
  const [timer, setTimer] = useState("Ends in 08:54:34");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => 
      setProducts(data));
  }, []);

  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 pt-8 gap-2 relative">
        {products.map(product => 
        (
          <ProductCard key={product.id} id={product.id} img={product.imageSrc} name={product.name} price={product.price+ "/kg"} />
        ))}
      </div>
    </div>
  );
};

export default SaleProducts;
