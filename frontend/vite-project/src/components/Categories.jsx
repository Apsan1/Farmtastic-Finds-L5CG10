import { useEffect, useState } from "react";
import { fetchCategories } from "./fetchproducts";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
    });
  
  }, []);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-3">Our Categories</h2>
      <h3 className="text-l text-gray-500 font-semi-bold mb-3">
        Categories available along with the counts
      </h3>
      <ul className="space-y-6">
        {categories.map((category, index) => (
          <li
            key={index}
            className="bg-gray-100 p-3 rounded-md flex justify-between flex-wrap sm:flex-nowrap"
          >
            <span className="font-medium w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4">
              {category.name}
            </span>
            <span className="w-full sm:w-auto text-right">
              {category.count} Products
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
