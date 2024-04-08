import React from 'react'
import { BsSearch } from "react-icons/bs";
import { IoIosMenu } from 'react-icons/io';
import { FaRegHeart} from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartCount from './CartCount';

const Mob_homepage_nav = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
     <div className="container p-8 lg:hidden">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
        <IoIosMenu size={30}/>
        <BsSearch size={24}/>
      </div>
      <h1 className="text-4xl">Farmtastic Finds</h1>
      <div className="flex gap-4 text-[30px]">
        <FaRegHeart />
        <div className="relative cursor-pointer">
        <AiOutlineShoppingCart />
        <CartCount size="w-[20px] h-[20px" />
      </div>
     </div>
    </div>
    </div>
    </div>
 
  );
};

export default Mob_homepage_nav;
