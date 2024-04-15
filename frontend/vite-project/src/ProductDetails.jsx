import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchById } from './components/fetchproducts';

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
    <div>
      <p>Product ID: {id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
}

export default ProductDetails;
