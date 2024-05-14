import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchById } from './components/fetchproducts';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CartContext } from './context/cart';
import Breadcrum from './components/breadcrumbs/breadcrumbs';
import carousels from './components/carosules';
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
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1);
      setCartItems(updatedCartItems);
    }
    setCartItems((prev) => [...prev, { ...product, totalQuantity: quantity }]);
  };
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
      <div className="product-detail grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-20 py-8 md:py-12 lg:py-16" style={{ backgroundImage: "linear-gradient(to right top, #ececec, #f1f1f1, #f5f5f5, #fafafa, #ffffff)" }}>
        <div className="justify-center">
          <img src={product.image} alt={product.name} className="object-cover w-full sm:max-w-lg mx-auto" />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <p className="text-3xl font-semibold">{product.name}</p>
          <p className="text-xl text-gray-800">{product.category}</p>
          <div className="text-yellow-400 flex gap-[2px] text-[20px]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <div className="quantity flex items-center flex-row gap-3">
            <p className="font-medium text-medium">Select Quantity:</p>
            <div className="flex items-center flex-row w-16 border-2 border-gray-600 rounded-md gap-2">
              <button className="text-black p-1 grid place-items-center cursor-pointer" onClick={() => handleQuantity(-1)}>-</button>
              <p>{quantity}</p>
              <button className="text-black p-1 grid place-items-center cursor-pointer" onClick={() => handleQuantity(1)}>+</button>
            </div>
          </div>
          <p className="text-3xl font-medium mb-2 text-black"><span className='text-2xl'>Rs</span> {product.price % 1 === 0 ? parseInt(product.price) : product.price} <span className='text-base text-gray-500'>per KG</span></p>
          <div className="w-full sm:w-[400px] h-auto py-2">
            <p className="text-normal text-gray-800">{product.description}</p>
          </div>
          <div className="flex items-center mt-1 flex-row gap-4">
            <button className="bg-accent text-white text-base sm:text-lg w-full sm:w-[200px] h-[50px] rounded-md grid items-center justify-center p-3 cursor-pointer" onClick={() => addtoCart()}>Add To Cart</button>
            <button className="bg-white text-accent border-2 border-black text-base sm:text-lg w-full sm:w-[200px] h-[50px] rounded-md grid items-center justify-center p-3 cursor-pointer">Add To Wishlist</button>
          </div>
        </div>
      </div>
      <div className="carousel">
        <h1 className="text-center">Related Products</h1>
         {/* Add Carousel here */}
        <Carousels />
      </div>
    </>
  );
}

export default ProductDetails;

