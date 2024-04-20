import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchById } from './components/fetchproducts';
import { AiFillStar, AiOutlineStar, AiOutlineShopping, AiFillHeart } from "react-icons/ai";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchById(id);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <div className="w-1/2">
        <img src={product.image} alt={product.name} className="w-full h-auto" />
      </div>
      <div className="w-1/2 p-4">
        <p className="text-xl font-bold mb-2">{product.name}</p>
        <p className="text-md mb-2 text-gray-500">Fruits</p>
        <div className="text-yellow-400 flex gap-[2px] text-[20px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <p className="text-xl mb-2 text-orange-600">Rs. {product.price}/kg</p>
        <p className="text-lg mb-3">Description:</p>
        <p className="text-lg mb-2">{product.description}</p>
        <p className="text-lg mb-2">Select Quantity:</p>
        <div className="flex items-center">
          <button
            className="bg-accent text-white p-1 rounded-full grid place-items-center cursor-pointer mr-2"
          >
            -
          </button>
         <p> 1</p>
          <button
            className="bg-accent text-white p-1 rounded-full grid place-items-center cursor-pointer ml-2"
          >
            +
          </button>
        </div>
        <div className="flex items-center mt-3">
          <button
            className="bg-accent text-white text-[28px] w-[45px] h-[45px] rounded-full grid place-items-center cursor-pointer mr-2"
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
  );
}

export default ProductDetails;
