import React from 'react';
import { BsSearch } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartCount from './CartCount';

const homepage_navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container lg:block">
        <div className="flex justify-between items-center p-8">
          <h1 className="text-4xl font-medium">Farmtastic Finds</h1>
          <div className="relative w-full max-w-[500px]">
            <input
              className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
              type="text"
              placeholder="Search product.."
            />
            <BsSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20} />
          </div>

          <div className="flex gap-4">
            <div className="icon_wrapper">
              <FaRegHeart />
            </div>
            <div className="icon_wrapper relative">
              <AiOutlineShoppingCart />
              <CartCount size="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homepage_navbar;
