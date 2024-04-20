import React, { useEffect, useState } from 'react';
import CategoryCard from "./CategoryCard";
import { fetchCategories } from "./fetchproducts";
const Category = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCategories();
        setCategoryData(data);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div>
    <div className="container">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryData.map((el, index) => (
          <CategoryCard 
            key={index}
            img={el.img} // Assuming you have 'img' property in your category data
            name={el.category} // Assuming 'category' property contains category name
            count={el.count}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Category;
