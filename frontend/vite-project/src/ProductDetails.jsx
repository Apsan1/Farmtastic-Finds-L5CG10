import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchById } from './components/fetchproducts';
import { AiFillStar, AiOutlineStar, AiOutlineShopping, AiFillHeart } from "react-icons/ai";
import { CartContext } from './context/cart';
import Breadcrum from './components/breadcrumbs/breadcrumbs';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cartItems, setCartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchById(id); // Fetching product data by id
        setProduct(data); // Updating the product state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error); // Logging error if fetch fails
      }
    };


    fetchData(); // Calling fetchData function when component mounts or id changes
  }, [id]); // Dependency array with id parameter, so useEffect runs when id changes


  const addtoCart = () => {
    setCartItems(prev => [...prev, { ...product, totalQuantity: quantity }]);
  }
// Function to update quantity of the products
const handleQuantity = (value) => {
  const newQuantity = Math.max(0, quantity + value);
  setQuantity(newQuantity);
}
  if (!product) {
    return <div>Loading...</div>; // Displaying loading message if product data is not yet available
  }

  return (
    // breadcrumb
    <>
    <Breadcrum product={product} /> {/*Passing product name here*/}
    <div className="flex">
      <div className="w-1/2">
        <img src={product.image} alt={product.name} className="w-full h-auto" />
      </div>
      <div className="w-1/2 p-4">
        <p className="text-2xl font-bold mb-2">{product.name}</p>
        <p className="text-md mb-2 text-gray-500">{product.category}</p>
        {/* <div className="text-yellow-400 flex gap-[2px] text-[20px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div> */}
        <p className="text-xl mb-2 text-orange-600">Rs. {product.price}/kg</p>
        <p className="text-lg mb-3 text-gray-700">Description:</p>
        <div className="w-[400px] h-[200px] bg-white shadow-md mb-3 px-4 py-2 rounded-lg">
        <p className="text-normal mb-2 text-gray-500">{product.description}</p>
        </div>
        <p className="text-lg mb-2">Select Quantity:</p>
        <div className="flex items-center">
          <button
            className="bg-accent text-white p-1 rounded-full grid place-items-center cursor-pointer mr-2"
            onClick={(e) => { e.stopPropagation(); handleQuantity(-1) }}
          >
            -
          </button>
         <p>{quantity} </p>
          <button
            className="bg-accent text-white p-1 rounded-full grid place-items-center cursor-pointer ml-2"
            onClick={(e) => { e.stopPropagation(); handleQuantity(1) }}
         >
            +
          </button>
        </div>
        <div className="flex items-center mt-3">
          <button
            className="bg-accent text-white text-[28px] w-[45px] h-[45px] rounded-full grid place-items-center cursor-pointer mr-2"
            onClick={() => addtoCart()}
          >
            <AiOutlineShopping />
          </button>
          <button
            className="bg-accent text-white text-[28px] w-[45px] h-[45px] rounded-full grid place-items-center cursor-pointer"
          >

            <AiFillHeart />
          </button>

        </div>
      </div>
    </div>
    </>
  );
}

export default ProductDetails;
