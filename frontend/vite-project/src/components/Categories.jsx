import React from "react";

const Categories = () => {
  const cities = [
    { name: "Fruits", sales: 25 },
    { name: "Vegetables", sales: 22 },
    { name: "Fish and Meats", sales: 12 },
    { name: "Eggs", sales: 6 },
    { name: "Breads and Breakfast", sales: 14 },
  ];

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-3">Our Categories</h2>
      <h3 className="text-l text-gray-500 font-semi-bold mb-3">
        Categories available along with the counts
      </h3>
      <ul className="space-y-6">
        {cities.map((city, index) => (
          <li
            key={index}
            className="bg-gray-100 p-3 rounded-md flex justify-between flex-wrap sm:flex-nowrap"
          >
            <span className="font-medium w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4">
              {city.name}
            </span>
            <span className="w-full sm:w-auto text-right">
              Rs.{city.sales.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
