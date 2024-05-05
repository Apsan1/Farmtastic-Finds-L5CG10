import React from 'react';
import { BsSearch } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartCount from './CartCount';

// Function to handle click on the cart icon
function handleCartClick() {
  console.log("Cart clicked");
  window.location.href = "/cart"; // Redirects to the cart page

}

// Function to handle click on the logo
function handleLogoClick(){
  console.log("Logo clicked");
  window.location.href = "/"; // Redirects to the homepage
}
// Return JSX for the homepage navbar
const HomepageNavbar = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container md:block mb-4">
        <div className="flex justify-between items-center py-2">
          <h1 className="text-3xl font-medium cursor-pointer" onClick={handleLogoClick}>Farmtastic Finds</h1>
          <div className="relative w-full max-w-[500px]">

            <input
              className="bg-[#f2f3f5] border-none outline-none px-6 py-2 rounded-[20px] w-full text-sm sm:text-base  text-left"
              type="text"
              placeholder="Search product.."
            />
            <BsSearch className="absolute top-0 right-0 mt-3 mr-6 text-gray-500" size={18} />
          </div>

          <div className="flex gap-2 lg:gap-4">
            {/* <button className="p-3 rounded-full flex justify-center items-center shadow-3xl h-10 w-10 transition:transform hover:scale-110">
              <FaHeart className="text-2xl text-red-600"/>
            </button> */}
            <button className="p-2 rounded-full flex justify-center items-center shadow-3xl h-10 w-10 relative transition:transform hover:scale-110" onClick={handleCartClick}>
              <AiOutlineShoppingCart className="text-4xl" />
              <CartCount size="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageNavbar;