import React, { useState } from "react";
import { ImCross } from "react-icons/im";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("No photo chosen");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData object to append image file with other form data
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);

    // handle form submission with form data
    console.log("Form Data:", formData);

    // Clear form fields after submission
    setProductName("");
    setPrice("");
    setDescription("");
    setImage(null);
    setImageName("No photo chosen");
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
        <button className="p-2">
          <ImCross />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="productName" className="block mb-1">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <textarea
            id="description"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="image" className="block mb-1">
            Product Image
          </label>
          <label
            htmlFor="image"
            className="block w-full bg-blue-500 text-white py-2 px-3 rounded-md cursor-pointer hover:bg-blue-600"
          >
            Choose Photo
          </label>
          <input
            type="file"
            id="image"
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
