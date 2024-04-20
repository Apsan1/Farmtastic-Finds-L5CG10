import React, { useState, useContext } from "react";
import { AiFillStar, AiOutlineStar, AiOutlineShopping, AiFillHeart } from "react-icons/ai";
import { CartContext } from "../context/cart";


function ProductCard(props) {
  const { id, img, name, price } = props;
  const { cartItems, setCartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  function handleClickProducts(id) {
    window.location.href = `/product/${id}`;
  };

  function handleWishlist() {
    console.log("Added to wishlist");
  }

  const handleClick = () => {
    setCartItems(prev => [...prev, { ...props, totalQuantity: quantity }]);
  }

  // Function to update quantity of the products
  const handleQuantity = (value) => {
    const newQuantity = Math.max(0, quantity + value);
    setQuantity(newQuantity);
  }

  return (
    <div className="border border-gray-300 border-2 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg-relative" onClick={() => handleClickProducts(id)}>
      <img src={img} alt={name} style={{ height: "15em" }} />

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
        <div className="flex items-center absolute -bottom-0 right-1">
          <button
            className="bg-accent text-white p-1 rounded-full grid place-items-center cursor-pointer"
            onClick={(e) => { e.stopPropagation(); handleQuantity(-1) }} // Prevent event propagation
          >
            -
          </button>
          <span className="px-2">{quantity}</span>
          <button
            className="bg-accent text-white p-1 rounded-full grid place-items-center cursor-pointer"
            onClick={(e) => { e.stopPropagation(); handleQuantity(1) }} // Prevent event propagation
          >
            +
          </button>
        </div>
        <button
          className="absolute -top-4 right-1 bg-accent text-white text-[28px] w-[45px] h-[45px] rounded-full grid place-items-center cursor-pointer"
          onClick={ (e) => { e.stopPropagation(); handleClick() } } // Prevent event propagation
        >
          <AiOutlineShopping />
        </button>

        <button
          className="absolute -top-4 right-14 bg-accent text-white text-[28px] w-[45px] h-[45px] rounded-full grid place-items-center cursor-pointer"
          onClick={ (e) => { e.stopPropagation(); handleWishlist() } } // Prevent event propagation
        >
          <AiFillHeart />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
