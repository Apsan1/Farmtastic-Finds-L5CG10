import React, { useEffect, useState } from 'react';
import CategoryCard from "./CategoryCard";
import { fetchCategories } from "./fetchproducts";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCategories();
        console.log(data);
        setCategoryData(data);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className="container">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryData.map((el, index) => (
          <CategoryCard 
            key={index}
            img={el.cat_image} // Assuming you have 'img' property in your category data
            name={el.name} // Assuming 'category' property contains category name
            
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
