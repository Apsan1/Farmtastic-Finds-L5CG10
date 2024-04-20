import React from 'react';
import { BsSearch } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
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
      <div className="container lg:block">
        <div className="flex justify-between items-center p-4 lg:p-8">
          <h1 className="text-lg lg:text-4xl font-medium md:text-3xl sm:text-2xl xs:text-lg cursor-pointer" onClick={handleLogoClick}>Farmtastic Finds</h1>
          <div className="relative w-full max-w-[300px] lg:max-w-[500px]">
            <input
              className="bg-[#f2f3f5] border-none outline-none px-4 py-2 rounded-[20px] w-full text-sm sm:text-base  text-center"
              type="text"
              placeholder="Search product.."
            />
            <BsSearch className="absolute top-0 right-0 mt-3 mr-3 text-gray-500" size={18} />
          </div>

          <div className="flex gap-2 lg:gap-4">
            <div className="icon_wrapper ">
              <FaRegHeart />
            </div>
            <div className="icon_wrapper relative" onClick={handleCartClick}>
              <AiOutlineShoppingCart />
              <CartCount size="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageNavbar;
