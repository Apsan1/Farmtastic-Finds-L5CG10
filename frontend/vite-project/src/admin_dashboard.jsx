import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineDashboard, AiOutlineShopping, AiOutlineShoppingCart, AiOutlineSetting } from 'react-icons/ai';
import { IoIosArrowDropdown } from 'react-icons/io';
import AdminNavbar from './components/Admin_navbar';
import BarGraph from './components/BarGraph';
import Categories from './components/Categories';
import OrderManagementTable from './components/OrderTable';

function Dashboard() {
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const productsRef = useRef(null);
  
  const products_menu = [
    { name: "Product List", path: "/product_list" },
    { name: "Add Product", path: "/add_product" }
    // Add more as needed
  ];

  const [ordersCount, setOrdersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [unpaidOrdersCount, setUnpaidOrdersCount] = useState(0);

  useEffect(() => {
    async function fetchOrdersCount() {
      try {
        const response = await fetch('http://127.0.0.1:8000/order/');
        const data = await response.json();
        const unpaidOrders = data.filter(order => order.status === 'Unpaid');
        setUnpaidOrdersCount(unpaidOrders.length);
        setOrdersCount(data.length);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }

    async function fetchProductsCount() {
      try {
        const response = await fetch('http://127.0.0.1:8000/products/');
        const data = await response.json();
        setProductsCount(data.length);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchOrdersCount();
    fetchProductsCount();
  }, []);

  const handleProductClick = () => {
    setShowProductsMenu(!showProductsMenu); // Toggle the products menu
  };

  const handleOrderClick = () => {
    window.location.href = '/order'; // Redirect to the order page
  };

  const handleLogoutClick = () => {
    window.location.href = '/admin/login'; // Redirect to the login page
  };

  const handleOverviewClick = () => {
    window.location.href = '/dashboard'; // Redirect to the dashboard
  };

  return (
    <div className="flex overflow-x-auto bg-[#f6f8fa]">
      {/* Sidebar */}
      <div className="w-64 bg-[#2D9D2D] border-r">
        <div className="py-4 text-xl font-semibold text-white text-center border-b">Admin Dashboard</div>
        <ul className="mt-6">
          <li className="pl-4 pr-2 py-2 text-white hover:text-black hover:bg-gray-200 cursor-pointer" onClick={handleOverviewClick}>
            <AiOutlineDashboard className="inline-block mr-2" /> Overview
          </li>
          <li className="pl-4 pr-2 py-2 text-white hover:text-black hover:bg-gray-200 cursor-pointer">
            <div ref={productsRef} className="flex items-center" onClick={handleProductClick}>
              <AiOutlineShopping className="inline-block mr-2" /> Products
              <IoIosArrowDropdown className="ml-auto" />
            </div>
            {showProductsMenu && (
              <ul className="pl-8">
                {products_menu.map((product, index) => (
                  <li
                    key={index}
                    className="text-white hover:text-black hover:bg-gray-200 cursor-pointer"
                    onClick={() => window.location.href = product.path}
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
            <p className="widget-text">{ordersCount}</p>
          </div>
          {/* Active Users */}
          <div className="dashboard-widget bg-[#d5f2b8] p-4 rounded-md shadow-md">
            <h2 className="widget-title">Total Products</h2>
            <img src="/images/products.png" alt="Active Users" className="widget-image h-12 w-12" />
            <p className="widget-text">{productsCount}</p>
          </div>
          {/* Order Process */}
          <div className="dashboard-widget bg-[#d5f2b8] p-4 rounded-md shadow-md">
            <h2 className="widget-title">Unpaid Order</h2>
            <img src="/images/unpaid.png" alt="Order Process" className="widget-image h-12 w-12" />
            <p className="widget-text">{unpaidOrdersCount}</p>
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
