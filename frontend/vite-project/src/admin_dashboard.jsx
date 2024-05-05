import React from 'react';

function App() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-green-700 border-r">
        <div className="py-4 text-xl font-semibold text-white text-center border-b">Farmtastic Finds</div>
        <ul className="mt-6">
          <li className="pl-4 pr-2 py-2 text-white hover:text-black hover:bg-gray-200 cursor-pointer">Dashboard</li>
          <li className="pl-4 pr-2 py-2 text-white hover:text-black hover:bg-gray-200 cursor-pointer">Users</li>
          <li className="pl-4 pr-2 py-2 text-white hover:text-black hover:bg-gray-200 cursor-pointer">Products</li>
          <li className="pl-4 pr-2 py-2 text-white hover:text-black hover:bg-gray-200 cursor-pointer">Orders</li>
          <li className="pl-4 pr-2 py-2 text-white hover:text-black hover:bg-gray-200 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-semibold mb-4">Welcome to the Admin Dashboard</h1>
        <div className="bg-white p-6 rounded shadow-md">
          {/* Your content goes here */}
        </div>
      </div>
    </div>
  );
}

export default App;
