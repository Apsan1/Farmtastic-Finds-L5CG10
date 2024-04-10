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
  
      // Fetch images and store as blobs
      const imageBlobs = await Promise.all(imgUrls.map(fetchImage));
  
      // Create object URLs for each blob
      const imageSrcs = imageBlobs.map(blob => URL.createObjectURL(blob));
  
      // Combine original data with imageSrcs
      const recordsWithImages = data.map((item, index) => ({
        ...item,
        imageSrc: imageSrcs[index]
      }));
  
      return recordsWithImages;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
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