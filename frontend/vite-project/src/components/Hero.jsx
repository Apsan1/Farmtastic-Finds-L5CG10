import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Category from './Category';

function handleShopNow() {
  console.log('Shop Now Clicked');
  window.location.href = '/shop'; // Redirect to the /shop URL
}

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-top h-screen mt-20">
        <h1 className="text-4xl font-bold text-center text-neutralBlack">
          Welcome to our store
        </h1>
        <p className="mt-4 text-lg text-center text-neutralBlack">
          We have the best products for you
        </p>
        <Category />
        <div className="flex items-center justify-center">
        <button
          onClick={handleShopNow}
          className="flex items-center justify-center px-4 py-2 mt-4 text-lg font-semibold text-white bg-accent rounded-md"
        >
          Shop Now <BsArrowRight className="ml-2" />
        </button>
        </div>  

        </div>
      </div>
  );
};

export default Hero;
