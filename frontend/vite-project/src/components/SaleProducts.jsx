import React, { useState, useEffect } from "react";
import { BsArrowRight } from 'react-icons/bs';
import ProductCard from "./ProductCard";
import fetchProducts  from "./fetchproducts.jsx";

const SaleProducts = () => {
  const [timer, setTimer] = useState("Ends in 08:54:34");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));

    // Calculate time remaining
    const endTime = new Date().getTime() + 8 * 60 * 60 * 1000 + 54 * 60 * 1000 + 34 * 1000; // Add remaining milliseconds
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = endTime - now;

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimer(`Ends in ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);

      if (distance < 0) {
        clearInterval(interval);
        setTimer("Expired");
      }
    };

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Flash Sale</h3>
          <p className="text-red-600 mt-2">
            Grab it or miss it !!
          </p>
        </div>
        <div className="space-x-4 mt:8 lg:mt-0">
          <button className="trending_btn">{timer}</button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 pt-8 gap-2 relative">
        <img className="w-full h-full object-cover" src="/images/j.png" alt="banner" />
        <div className="absolute bottom-20 left-20">
        <div className="animate-bounce inline-block mt-10">
          <div className="bg-accentDark hover:bg-[#f2861a] text-white rounded-full flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
            Shop Now <BsArrowRight />
          </div>
          </div>
        </div>
        {products.map(product => (
          <ProductCard key={product.id} img={product.imageSrc} name={product.name} price={product.price+ "/kg"} />
        ))}
      </div>
    </div>
  );
};

export default SaleProducts;
