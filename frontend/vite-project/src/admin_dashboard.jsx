import React, { useState, useRef } from 'react';
import { AiOutlineDashboard, AiOutlineUser, AiOutlineShopping, AiOutlineShoppingCart, AiOutlineSetting, AiOutlineFileText, AiOutlineSolution } from 'react-icons/ai';
import { IoIosArrowDropdown } from 'react-icons/io';
import AdminNavbar from './components/Admin_navbar';
import BarGraph from './components/BarGraph';
import Categories from './components/Categories';
import OrderManagementTable from './components/OrderTable';

function Dashboard() {
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  const productsRef = useRef(null);

  const products = [
    { name: "Product List", path: "/product_list" },
    { name: "Add Product", path: "/add_product" }
    // Add more as needed
  ];

  function handleOverviewClick() {
    console.log("Dashboard overview clicked");
    window.location.href = "/dashboard"; // Redirects to the overview page
  }

  function handleOrderClick() {
    console.log("Order clicked");
    window.location.href = "/order"; // Redirects to the order page
  }

  function handleLogoutClick() {
    console.log("Logout clicked");
    window.location.href = "/admin/login"; // Redirects to the login page
  }

  const handleProductClick = (path) => {
    if (path) {
      window.location.href = path; // Redirect to the specified path
    } else {
      setShowProductsMenu(!showProductsMenu); // Toggle the products menu
    }
  };

  const toggleProfileSettings = () => {
    setShowProfileSettings(!showProfileSettings);
  };

  return (
    <div className="flex overflow-x-auto bg-[#f6f8fa]">
      {/* Sidebar */}
      <div className="w-64 bg-[#2D9D2D] border-r">
        <div className="py-4 text-xl font-semibold text-white text-center border-b">Admin Dashboard</div>
        <ul className="mt-6">
          <li className="pl-4 pr-2 py-2 text-white hover:text-black hover:bg-gray-200 cursor-pointer " onClick={handleOverviewClick}>
            <AiOutlineDashboard className="inline-block mr-2" /> Overview
          </li>
          <li className="pl-4 pr-2 py-2 text-white hover:text-black hover:bg-gray-200 cursor-pointer">
            <div ref={productsRef} className="flex items-center" onClick={() => handleProductClick()}>
              <AiOutlineShopping className="inline-block mr-2" /> Products
              <IoIosArrowDropdown className="ml-auto" />
            </div>
            {showProductsMenu && (
              <ul className="pl-8">
                {products.map((product, index) => (
                  <li
                    key={index}
                    className="text-white hover:text-black hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleProductClick(product.path)}
                  >
                    {product.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="pl-4 pr-2 py-2 text-white hover:text-black hover:bg-gray-200 cursor-pointer" onClick={handleOrderClick}>
            <AiOutlineShoppingCart className="inline-block mr-2" /> Orders
          </li>
          <li className="pl-4 pr-2 py-2 text-white hover:text-black hover:bg-gray-200 cursor-pointer" onClick={handleLogoutClick}>
            <AiOutlineSetting className="inline-block mr-2" /> Logout
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        <AdminNavbar />
        <div className="grid grid-cols-3 gap-5">
          {/* Monthly Income */}
          <div className=" dashboard-widget bg-[#d5f2b8] p-4 rounded-md shadow-md">
            <h2 className="widget-title">Total Order</h2>
            <img src="/images/orders.png" alt="Monthly Income" className="widget-image h-12 w-12" />
            <p className="widget-text">Rs.50</p>
          </div>
          {/* Active Users */}
          <div className="dashboard-widget bg-[#d5f2b8] p-4 rounded-md shadow-md">
            <h2 className="widget-title">Total Products</h2>
            <img src="/images/products.png" alt="Active Users" className="widget-image h-12 w-12" />
            <p className="widget-text">500</p>
          </div>
          {/* Order Process */}
          <div className="dashboard-widget bg-[#d5f2b8] p-4 rounded-md shadow-md">
            <h2 className="widget-title">Unpaid Order</h2>
            <img src="/images/unpaid.png" alt="Order Process" className="widget-image h-12 w-12" />
            <p className="widget-text">8</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <h1 className="text-2xl font-semibold mb-3"> Sale Statistics</h1>
            <BarGraph />
          </div>
          <div>
            <Categories />
          </div>
        </div>
        <OrderManagementTable />
      </div>
    </div>
  );
}

export default Dashboard;