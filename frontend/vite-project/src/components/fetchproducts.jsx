// Function to fetch products
async function fetchProducts() {
  try {
    const response = await fetch('http://127.0.0.1:8000/products/');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();

    // Extract image URLs and add to each product as 'imageSrc'
    const recordsWithImages = data.map(item => ({
      ...item,
      imageSrc: item.image // Assuming 'image' property contains the image URL
    }));

    return recordsWithImages;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Function to fetch product by ID
export async function fetchById(id) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return null;
  }
}

// Function to fetch categories
export async function fetchCategories() {
  try {
    const response = await fetch('http://127.0.0.1:8000/products/');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();

    // Extract categories and count occurrences
    const categories = ["Fruits", "Dairy & eggs", "Vegetables", "Meat & Poultry"];
    const categoryCount = categories.map(category => data.filter(item => item.category === category).length);

    // Combine categories with their counts into an array of objects
    const categoryData = categories.map((category, index) => ({
      category,
      count: categoryCount[index]
    }));

    //add imageSrc to each category
    const categoryImages = [
      '/public/images/category__1.webp',
      '/public/images/category__6.webp',
      '/public/images/category__2.webp',
      '/public/images/category__5.webp'
    ];
    for (let i = 0; i < categoryData.length; i++) {
      categoryData[i].img = categoryImages[i];
    }
    categoryData.forEach((category, index) => {
      category.img = categoryImages[index];
    });

    return categoryData;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default fetchProducts;
