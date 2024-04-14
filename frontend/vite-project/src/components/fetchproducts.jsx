function fetchProducts() {

const fetchingProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/products/');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
  
      // Extract image URLs
      const imgUrls = data.map(item => item.image);
  
  const recordsWithImages = data.map((item, index) => ({
    ...item,
    imageSrc: imgUrls[index]
  }));

  return recordsWithImages;
} catch (error) {
  console.error('Error fetching data:', error);
  return [];
}}
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
  
  return fetchingProducts();
}

export default fetchProducts;