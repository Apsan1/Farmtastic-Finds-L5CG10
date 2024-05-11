import React, { useState } from 'react';
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
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = () => {
    if (searchValue.trim() === '') {
      return;
    }
    window.location.href = `/search/${searchValue}`; // Redirects to the search page
  };

  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center py-2">
          <h1 className="text-3xl font-medium cursor-pointer" onClick={handleLogoClick}>Farmtastic Finds</h1>
          <div className="relative flex-1 max-w-[500px]">
            <input
              className="bg-[#f2f3f3] border-none outline-none px-6 py-2 rounded-[20px] w-full text-sm sm:text-base  text-left"
              type="text"
              placeholder="Search product.."
              value={searchValue}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit();
                }
              }}
            />
            <button className="absolute top-0 right-0 mt-3 mr-6 text-gray-500" onClick={handleSubmit}>
              <BsSearch size={18} />
            </button>
          </div>

          <div className="flex items-center gap-4 lg:gap-8">
            {/* <button className="p-2 rounded-full flex justify-center items-center shadow-3xl h-10 w-10 transition:transform hover:scale-110">
              <FaHeart className="text-xl lg:text-3xl text-red-600"/>
            </button> */}
            <button className="p-2 rounded-full flex justify-center items-center shadow-3xl h-10 w-10 relative transition:transform hover:scale-110" onClick={handleCartClick}>
              <AiOutlineShoppingCart className="text-xl lg:text-4xl" />
              <CartCount size="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageNavbar;
