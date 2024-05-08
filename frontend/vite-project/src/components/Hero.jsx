import React from 'react';
import { BsArrowRight } from 'react-icons/bs'; // Importing the arrow icon from react-icons library
import Category from './Category'; // Importing the Category component
import Footer from './footer';

// Function to handle the "Shop Now" button click event
function handleShopNow() {
  console.log('Shop Now Clicked'); // Logging a message to console when button is clicked
  window.location.href = '/shop'; // Redirecting to the /shop URL when button is clicked
}

// Hero component
const Hero = () => {
  return (
    <>
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-top h-screen mt-20">
        {/* Main heading */}
        <h1 className="text-4xl font-bold text-center text-neutralBlack">
          Welcome to our store
        </h1>
        {/* Subheading */}
        <p className="mt-4 text-lg text-center text-neutralBlack">
          We have the best products for you
        </p>
        {/* Category component */}
        <Category />
        {/* "Shop Now" button */}
        <div className="flex items-center justify-center">
          <button
            onClick={handleShopNow} // Calling the handleShopNow function when button is clicked
            className="transition-transform hover:scale-110 flex items-center justify-center px-4 py-2 mt-4 text-lg font-semibold text-white bg-accent rounded-md"
          >
            Shop Now <BsArrowRight className="ml-2" /> {/* Arrow icon */}
          </button>

          
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Hero;
