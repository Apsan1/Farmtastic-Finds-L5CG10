import React from "react";
import { AiOutlineSearch} from "react-icons/ai";
import { MdDeleteOutline, MdOutlineUpdate } from "react-icons/md";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { fetchProducts } from "./fetchproducts";

const ProductList = () => {
  
  const [selectedRow, setSelectedRow] = useState(null);
  const [products, setProducts] = useState([]);

  useState(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  function handleOverviewClick() {
    window.location.href = "/dashboard"; // Redirects to the overview page
  }

  const handleDelete = () => {
    if (selectedRow !== null) {
      // logic
      console.log("Deleting row:", selectedRow);
      setSelectedRow(null); // Reset selected row after update
    } else {
      alert("Please select a row to delete.");
    }
  };

  const handleupdate = () => {
    if (selectedRow !== null) {
      // logic 
      console.log("updatingrow:", selectedRow);
      setSelectedRow(null); // Reset selected row after update
    } else {
      alert("Please select a row to update.");
    }
  };
  return (
    <div className="w-screen">
      <div className="mx-auto mt-8 max-w-screen-xxl px-20">
        <h1 className="flex-1 text-xl font-bold text-gray-900 mb-4">Product List</h1>
        <div className="md:flex md:items-center md:justify-between flex-col md:flex-row">
          {/* Search input field */}
          <div className="flex items-center mb-4 sm:mb-0">
          <IoMdArrowBack className="text-gray-500 mr-2" onClick={handleOverviewClick} />
            <div className="relative">
              <input
                type="text"
                id="search"
                placeholder="Search"
                className="pl-8 pr-3 py-2 border rounded-lg w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <AiOutlineSearch className="text-gray-400" />
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="flex items-center justify-start sm:justify-end">
              <div className="flex items-center">
                <label
                  htmlFor="sort"
                  className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"
                >
                  Sort by:
                </label>
                <select
                  id="sort"
                  name="sort"
                  className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"
                >
                  <option className="whitespace-no-wrap text-sm">All</option>
                  <option className="whitespace-no-wrap text-sm">Fruits</option>
                  <option className="whitespace-no-wrap text-sm">Vegetables</option>
                  <option className="whitespace-no-wrap text-sm">Fish and Meat</option>
                  <option className="whitespace-no-wrap text-sm">Eggs</option>
                </select>
              </div>
              <div className="flex items-center space-x-4">
              <div className="relative inline-block text-left">
  <button
    type="button"
    onClick={() => handleupdate()}
    className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow"
  >
    Update <MdOutlineUpdate className="ml-1 h-4 w-4" />
  </button>
  {selectedRow !== null && (
    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <button
          onClick={() => setSelectedRow(null)}
          className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
          role="menuitem"
        >
          Cancel
        </button>
        <button
          onClick={() => handleupdate()}
          className="block px-4 py-2 text-sm text-red-700 w-full text-left hover:bg-gray-100"
          role="menuitem"
        >
          Update Row #{selectedRow}
        </button>
      </div>
    </div>
  )}
</div>
          
          <div className="relative inline-block text-left">
  <button
    type="button"
    onClick={() => handleDelete()}
    className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow"
  >
    Delete <MdDeleteOutline className="ml-1 h-4 w-4" />
  </button>
  {selectedRow !== null && (
    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <button
          onClick={() => setSelectedRow(null)}
          className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
          role="menuitem"
        >
          Cancel
        </button>
        <button
          onClick={() => handleDelete()}
          className="block px-4 py-2 text-sm text-red-700 w-full text-left hover:bg-gray-100"
          role="menuitem"
        >
          Delete Row #{selectedRow}
        </button>
      </div>
    </div>
  )}
</div>

            </div>
          </div>
        </div>
        </div>
 
    <div>
      <div className="mt-6 overflow-hidden rounded-xl border shadow">
        <table className="min-w-full">
          <thead className="hidden border-b lg:table-header-group">
            <tr className="">
              <th className=""></th>
              <th className="border-b py-4 text-m font-medium text-gray-600 sm:px-6">Product ID</th>
              <th className="border-b py-4 text-m font-medium text-gray-600 sm:px-6 hidden md:table-cell">Category</th>
              <th className="border-b py-4 text-m font-medium text-gray-600 sm:px-6 hidden lg:table-cell">Product</th>
              <th className="border-b py-4 text-m font-medium text-gray-600 sm:px-6">Price</th>
              <th className="border-b py-4 text-m font-medium text-gray-600 sm:px-6 hidden lg:table-cell">Quantity</th>
              <th className="border-b py-4 text-m font-medium text-gray-600 sm:px-6 hidden lg:table-cell">Availability</th>
            </tr>
          </thead>

          <tbody className="lg:border-gray-300">
            {/* Table body rows */}
            
            {products.map((product, index) => (
              <tr className="text-center" key={index}>
                <td className="whitespace-no-wrap py-4 text-sm font-medium text-black sm:px-6">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                </td>
                <td className="whitespace-no-wrap py-4 text-sm font-bold text-black sm:px-6">{product.id}</td>
                <td className="whitespace-no-wrap py-4 text-sm font-medium text-black sm:px-6 hidden md:table-cell">{product.category}</td>
                <td className="whitespace-no-wrap py-4 text-sm font-medium text-black sm:px-6 hidden lg:table-cell">{product.name}</td>
                <td className="whitespace-no-wrap py-4 text-sm font-medium text-black sm:px-6">{product.price}</td>
                <td className="whitespace-no-wrap py-4 px-6 text-sm font-medium text-black hidden lg:table-cell">{product.quantity}</td>
                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-black sm:px-6 lg:table-cell">
                  <div className="inline-flex items-center rounded-full bg-green-500 py-2 px-3 text-xs text-white">In stock</div>
                </td>
              </tr>
            ))}


            {/* <tr className="text-center">
              <td className="whitespace-no-wrap py-4 text-sm font-medium text-black sm:px-6">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
              </td>
              <td className="whitespace-no-wrap py-4 text-sm font-bold text-black sm:px-6">#131</td>
              <td className="whitespace-no-wrap py-4 text-sm font-medium text-black sm:px-6 hidden md:table-cell">Vegetables</td>
              <td className="whitespace-no-wrap py-4 text-sm font-medium text-black sm:px-6 hidden lg:table-cell">Potato</td>
              <td className="whitespace-no-wrap py-4 text-sm font-medium text-black sm:px-6">Rs.150</td>
              <td className="whitespace-no-wrap py-4 px-6 text-sm font-medium text-black  hidden lg:table-cell">0</td>
              <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-black sm:px-6 lg:table-cell">
                <div className="inline-flex items-center rounded-full bg-red-500 py-2 px-3 text-xs text-white">Out of stock</div>
              </td>
            </tr> */}

          </tbody>
        </table>
      </div>
    </div>
    </div>
     </div>
  );
};
export default ProductList;
