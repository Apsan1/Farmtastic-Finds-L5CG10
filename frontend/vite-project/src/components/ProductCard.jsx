import React, { useState, useContext } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShopping,
  AiFillShopping,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { CartContext } from "../context/cart";

// ProductCard component definition
function ProductCard(props) {

  const [wishlistIsHovered, setWishlistIsHovered] = useState(false);
  const [addCartIsHovered, setAddCartIsHovered] = useState(false);
  const { id, image, name, price } = props;
  // Accessing cart context
  const { cartItems, setCartItems } = useContext(CartContext);
  // State for quantity of product
  const [quantity, setQuantity] = useState(1);
  // Function to handle click on product card
  function handleClickProducts(id) {
    window.location.href = `/product/${id}`; // Redirects to the product page
  }
  // Function to handle adding to wishlist
  function handleWishlist() {
    console.log("Added to wishlist");
  }
  // Function to handle adding product to cart
  const handleClick = () => {
    const index = cartItems.findIndex((item) => item.id === props.id);
    if (index !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1);
      setCartItems(updatedCartItems);
    }
    setCartItems((prev) => [...prev, { ...props, totalQuantity: quantity }]);
  };

  // Function to update quantity of the products
  const handleQuantity = (value) => {
    const newQuantity = Math.max(0, quantity + value);
    setQuantity(newQuantity);
  };
  // Return JSX for product card
  return (
    <div
      className="shadow-lg phone:w-[300px] md:w-[auto] rounded-md hover:scale-105 transition-transform h-80 relative"
      onClick={() => handleClickProducts(id)}
    >
      <div className="flex justify-center items-center h-60">
        <div className="p-0 w-full h-full flex justify-center items-center bg-white">
        <img
            src={image}
            alt={name}
            className="object-cover w-[200px] h-[200px] max-w-full max-h-full rounded-md"
          />
        </div>
      </div>
      <div className="relative p-3 w-full bg-white rounded-b-md">
        {/* <div className="text-yellow-400 flex">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div> */}
        <h3 className="text-md font-semibold text-black-600">Rs {price}</h3>
        <h3 className="font-base text-md w-50 text-gray-500">{name}</h3>
        <div className="flex flex-row items-center justify-end">
          {/* Quantity Buttons */}
          <button
            className="bg-white shadow-3xl text-black p-1 rounded-full grid place-items-center transition-transform hover:scale-125"
            onClick={(e) => {
              e.stopPropagation();
              handleQuantity(-1);
            }} // Prevent event propagation
          >
            -
          </button>
          <span className="px-2">{quantity}</span>
          <button
            className="bg-white shadow-3xl text-black p-1 rounded-full grid place-items-center cursor-pointer transition-transform hover:scale-125"
            onClick={(e) => {
              e.stopPropagation();
              handleQuantity(1);
            }} // Prevent event propagation
          >
            +
          </button>
        </div>

        {/*  Add to cart and wishlist buttons */}
        <div className="pb-1">
          <button
            className="transition-transform hover:scale-110 absolute shadow-3xl -top-0 right-1 bg-white text-black text-[22px] w-[40px] h-[40px] rounded-full grid place-items-center"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }} // Prevent event propagation
            onMouseEnter={() => setAddCartIsHovered(true)}
            onMouseLeave={() => setAddCartIsHovered(false)}
          >
            {addCartIsHovered? <AiFillShopping /> : <AiOutlineShopping />}
          </button>
          {/* <button
            className="transition-transform hover:scale-110 absolute shadow-3xl -top-0 right-12 bg-white text-black text-[22px] w-[40px] h-[40px] rounded-full grid place-items-center cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleWishlist();
            }} // Prevent event propagation
            onMouseEnter={() => setWishlistIsHovered(true)}
            onMouseLeave={() => setWishlistIsHovered(false)}
          >
           {wishlistIsHovered ? <AiFillHeart className="text-red-600" />: <AiOutlineHeart className="text-black" />}
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
