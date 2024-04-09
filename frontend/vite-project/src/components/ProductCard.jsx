import React from "react";
import { AiFillStar, AiOutlineStar, AiOutlineShopping, AiFillHeart } from "react-icons/ai";
import Cart from "./Cart";

function onClickOnshopping () {
  console.log("Shopping");
  // gotocartpage
  return <Cart />;
}


const ProductCard = ({ img, name, price }) => {
  return (
    <div className="border border-gray-300 border-2 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg-relative">
      <img src={img} alt={name} />
      <div className="space-y-2 relative p-4">
        <div className="text-yellow-400 flex gap-[2px] text-[20px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <h3 className="font-medium">{name}</h3>
        <h3 className="text-2xl font-medium text-orange-600">{price}</h3>
        <button
          className="absolute -top-4 right-1 bg-accent text-white text-[28px] w-[45px] h-[45px] rounded-full grid place-items-center cursor-pointer"
          onClick={onClickOnshopping}
        >
          <AiOutlineShopping />
        </button>

        <button
          className="absolute -top-4 right-14 bg-accent text-white text-[28px] w-[45px] h-[45px] rounded-full grid place-items-center cursor-pointer"
        >
          <AiFillHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
