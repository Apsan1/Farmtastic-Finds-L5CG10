import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/products/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const recordsWithImages = await Promise.all(
          data.map(async item => {
            const imageUrl = decodeURIComponent(item.image); // Assuming 'image' is the property containing the image URL
            const imageBlob = await fetchImage(imageUrl);
            const imageSrc = URL.createObjectURL(imageBlob);
            return { ...item, imageSrc };
          })
        );
        setRecords(recordsWithImages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to fetch image
  const fetchImage = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }
      return await response.blob();
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  };

  return (
    <div>
      <ul>
        {records.map((item, index) => (
          <li key={index}>
            {item.imageSrc && <img src={item.imageSrc} alt={item.name} style={{ width: '100px', height: '100px' }} />}
            {item.id} | {item.name} | {item.description} | {item.stock} | {item.category_id} | {item.price} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
