import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchById } from './components/fetchproducts'; // Importing fetchById function from fetchproducts.js
import { AiFillStar, AiOutlineStar, AiOutlineShopping, AiFillHeart } from "react-icons/ai"; // Importing icons from react-icons library

const ProductDetails = () => {
  const { id } = useParams(); // Getting the 'id' parameter from the URL
  const [product, setProduct] = useState(null); // State to store the product data

  
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

  if (!product) {
    return <div>Loading...</div>; // Displaying loading message if product data is not yet available
  }

  return (
    <div className="flex ">
      <div className="w-1/2 ">
        <img src={product.image} alt={product.name} className="w-full h-auto" /> {/* Displaying product image */}
      </div>
      <div className="w-1/2 p-4 ">
        <p className="text-xl font-bold mb-2">{product.name}</p> {/* Displaying product name */}
        <p className="text-md mb-2 text-gray-500">Fruits</p> {/* Displaying product category */}
        <div className="text-yellow-400 flex gap-[2px] text-[20px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div> {/* Displaying star ratings */}
        <p className="text-xl mb-2 text-orange-600">Rs. {product.price}/kg</p> {/* Displaying product price */}
        <p className="text-lg mb-3">Description:</p> {/* Description title */}
        <p className="text-lg mb-2">{product.description}</p> {/* Displaying product description */}
        <p className="text-lg mb-2">Select Quantity:</p> {/* Quantity selection title */}
        <div className="flex items-center">
          <button
            className="bg-accent text-white p-1 rounded-full grid place-items-center cursor-pointer mr-2"
          >
            - {/* Button to decrease quantity */}
          </button>
         <p> 1</p> {/* Displaying selected quantity */}
          <button
            className="bg-accent text-white p-1 rounded-full grid place-items-center cursor-pointer ml-2"
          >
            + {/* Button to increase quantity */}
          </button>
        </div>
        <div className="flex items-center mt-3">
          <button
            className="bg-accent text-white text-[28px] w-[45px] h-[45px] rounded-full grid place-items-center cursor-pointer mr-2"
          >
            <AiOutlineShopping /> {/* Button for adding to cart */}
          </button>
          <button
            className="bg-accent text-white text-[28px] w-[45px] h-[45px] rounded-full grid place-items-center cursor-pointer"
          >
            <AiFillHeart /> {/* Button for adding to favorites */}
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
