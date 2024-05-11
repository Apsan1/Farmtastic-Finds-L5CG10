import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ProductCard from "./ProductCard";
import {fetchProducts, fetchProductsByCategory, fetchProductsBySearch}  from "./fetchproducts.jsx";
import { Categorybreadcrum, Searchbreadcrum } from "./breadcrumbs/breadcrumbs.jsx";
import {AiOutlineSearch} from "react-icons/ai";

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
      <div className="px-20 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-20">
        {products.map(product => 
        (
          <ProductCard key={product.id} id={product.id} image={product.imageSrc} name={product.name} price={product.price+ "/kg"} />
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
          <ProductCard key={product.id} id={product.id} image={product.image} name={product.name} price={product.price+ "/kg"} />
        ))}
      </div>
    </div>
    </>
  );
}

export const SaleProductsFilteredBySearch = () => {

  function handleShopNow(){
    window.location.href = "/shop";
  }

  const { search } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsBySearch(search).then(data =>
      setProducts(data));
  }, [search]);
  if (products.length === 0 || products === undefined || products === null) {
    
    return(
    <>
      <Searchbreadcrum search={search} />
      <div className="flex flex-col w-full h-[70vh] items-center justify-center">
      <div className="flex flex-row items-center justify-center my-3 mx-5">
        <p className="text-2xl"> No result found for "{search}"</p> 
      </div>
      <h1 className="text-2xl text-center"> Try Using Any Other Keyword </h1>
      <div className="text-base flex flex-col items-center justify-center">
       {/* <p>No more products found matching your search criteria.</p>  */}
        <p className="text-gray-700">Shop other products from our store.</p>
        <button className="bg-black hover:scale-105 transition-transform text-white px-4 py-2 rounded-md mt-2"
          onClick={handleShopNow}
        >Shop Now</button>
      </div>
      </div>
      </>
      );
  }
  return (
    <>
    <Searchbreadcrum search={search} />
    <div className="text-md my-3 mx-5">
      <p> {products.length} {products.length === 1 ? "result" : "results"} for "{search}"</p>
      </div>
    <div className="container mb-40">
      <div className="lg:flex justify-between items-center">
      </div>
      <div className="px-20 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-20">
        {products.map(product =>
        (
          <ProductCard key={product.id} id={product.id} image={product.image} name={product.name} price={product.price+ "/kg"} />
        ))}
      </div>
    </div>
    <div className="text-base flex flex-col items-center justify-center">
       {/* <p>No more products found matching your search criteria.</p>  */}
        <p className="text-gray-700">Shop more products from our store.</p>
        <button className="bg-black hover:scale-105 transition-transform text-white px-4 py-2 rounded-md mt-2"
          onClick={handleShopNow}
        >Shop More</button>
    </div>
    </>
  );
}
export default SaleProducts;
