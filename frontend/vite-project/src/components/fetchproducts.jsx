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

export async function fetchById(id) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const Gotdata = await response.json();
    return Gotdata;
  } catch (error) {
    console.error('Error fetching data:', error);
    return "Failed to fetch data";
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch('http://127.0.1:8000/products/');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    var data = await response.json();
    var categories = data.map(item => item.category);
    var uniqueCategories = [...new Set(categories)];
    // for how many times each category is repeated in the array of categories
    var categoryCount = uniqueCategories.map(category => categories.filter(cat => cat === category).length);
    // Combine the two arrays into an array of objects
    var categoryData = uniqueCategories.map((category, index) => ({
      category,
      count: categoryCount[index]
    }));
    return categoryData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default fetchProducts;