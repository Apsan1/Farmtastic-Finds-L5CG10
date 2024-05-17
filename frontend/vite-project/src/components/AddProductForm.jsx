import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { fetchCategories, fetchProducts } from "./fetchproducts";


function AddProduct() {
  const [Name, setProductName] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("No photo chosen");
  const [Category, setCategory] = useState([]);
  const [Stock, setStock] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [highestId, setHighestId] = useState(0);

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategory(data);
    });

    fetchProducts().then((products) => {
      const ids = products.map((product) => product.id);
      const maxId = Math.max(...ids);
      setHighestId(maxId);
    });
  }, []);

  function handleOverviewClick() {
    window.location.href = "/dashboard";
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", Name);
    formData.append("price", Price);
    formData.append("description", Description);
    formData.append("category", selectedCategory);
    formData.append("stock", Stock);
    formData.append("image", image);
    formData.append("id", highestId + 1);

    setProductName("");
    setPrice("");
    setDescription("");
    setImage(null);
    setImageName("No photo chosen");

    fetch("http://127.0.0.1:8000/products/", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Product added successfully");
          setHighestId((prevId) => prevId + 1);
        } else {
          alert("Failed to add product");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    if (selectedImage) {
      setImageName(selectedImage.name);
    } else {
      setImageName("No photo chosen");
    }
  };

  return (
    <div className="max-w-lg mx-auto border border-gray-300 rounded-md p-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Add Product</h2>
        <div className=""onClick={handleOverviewClick}>
        <button className="p-2">
          <ImCross />
        </button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="Name" className="block mb-1">
            Product Name
          </label>
          <input
            type="text"
            id="Name"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            value={Name}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="Price" className="block mb-1">
            Price
          </label>
          <input
            type="number"
            id="Price"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="Description" className="block mb-1">
            Description
          </label>
          <textarea
            id="Description"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
        <div>
          <label htmlFor="Category" className="block mb-1">
            Category
          </label>
          <select
            id="Category"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {Category.map((category, index) => (
              <option key={index} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        </div>
        <div>
          <label htmlFor="Stock" className="block mb-1">
            Stock
          </label>
          <select
            id="Stock"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="Image" className="block mb-1">
            Product Image
          </label>
          <label
            htmlFor="Image"
            className="block w-full bg-blue-500 text-white py-2 px-3 rounded-md cursor-pointer hover:bg-blue-600"
          >
            Choose Photo
          </label>
          <input
            type="file"
            id="Image"
            className="hidden"
            onChange={handleImageChange}
            required="required"
          />

          <span className="block mt-2">{imageName}</span>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
