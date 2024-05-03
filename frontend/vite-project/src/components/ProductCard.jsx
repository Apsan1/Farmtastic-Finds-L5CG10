import React, { useState, useContext } from "react";
import { AiFillStar, AiOutlineStar, AiOutlineShopping, AiFillHeart } from "react-icons/ai";
import { CartContext } from "../context/cart";

// ProductCard component definition
function ProductCard(props) {
  const { id, img, name, price } = props;
  // Accessing cart context
  const { cartItems, setCartItems } = useContext(CartContext);
  // State for quantity of product
  const [quantity, setQuantity] = useState(1);
// Function to handle click on product card
  function handleClickProducts(id) {
    window.location.href = `/product/${id}`; // Redirects to the product page
  };
// Function to handle adding to wishlist
  function handleWishlist() {
    console.log("Added to wishlist");
  }
// Function to handle adding product to cart
  const handleClick = () => {
    const index = cartItems.findIndex(item => item.id === props.id);
    if (index !== -1) {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  }
    setCartItems(prev => [...prev, { ...props, totalQuantity: quantity }]);
  }

  // Function to update quantity of the products
  const handleQuantity = (value) => {
    const newQuantity = Math.max(0, quantity + value);
    setQuantity(newQuantity);
  }
// Return JSX for product card
  return (
    <div className="shadow-lg rounded-xl border hover:border-gray-300 hover:scale-105 transition-transform"
     onClick={() => handleClickProducts(id)}>
      <div className="flex justify-center items-center">
      <img src={img} alt={name} style={{ height: "250px"}} />
      </div>
      <div className="space-y-2 relative m-0 p-3 border-black border-1 rounded-b-lg">
        <div className="text-yellow-400 flex">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <h3 className="font-medium">{name}</h3>
        <h3 className="text-2xl font-medium text-black-600">{price}</h3>
        <div className="flex items-center absolute right-1">
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
        <div className="pb-1">
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
    </div>
  );
}

export default ProductCard;