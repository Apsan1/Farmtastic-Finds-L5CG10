import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

function getusername(){
  const name = localStorage.getItem('username'); //get from local storage
  return name;
}

// Function to handle click on the logo
function handleLogoClick() {
  console.log("Logo clicked");
  window.location.href = "/"; // Redirects to the homepage
}

// Function to handle click on the profile picture
function handleProfileClick() {
  console.log("Profile clicked");
  window.location.href = "/profile"; // Redirects to the profile page
}

// Return JSX for the homepage navbar
const AdminNavbar = () => {
  const username = getusername();
  return (
    <div className="sticky top-0 bg-white z-10 ">
      <div className="container md:block mb-4">
        <div className="flex justify-between items-center py-2">
          <h1
            className="text-3xl font-medium cursor-pointer"
            onClick={handleLogoClick}
          >
            Farmtastic Finds
          </h1>
          <div className="relative w-full max-w-[500px]">
            <input
              className="bg-[#f2f3f5] border-none outline-none px-6 py-2 rounded-[20px] w-full text-sm sm:text-base  text-left"
              type="text"
              placeholder="Search order, products, etc.."
            />
            <BsSearch
              className="absolute top-0 right-0 mt-3 mr-6 text-gray-500"
              size={18}
            />
          </div>

          <div className="flex gap-2 lg:gap-4">
            <button className="p-3 rounded-full flex justify-center items-center shadow-3xl h-10 w-10 transition:transform hover:scale-110">
              <IoMdNotificationsOutline className="text-2xl" />
            </button>
            <div className="relative" onClick={handleProfileClick}>
              <img
                src="https://source.unsplash.com/random/50x50" // Random unsplash img url
                alt="Profile Picture"
                className="rounded-full w-10 h-10 object-cover cursor-pointer"
              />
              <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="flex flex-col items-center ml-2">
              <span className="font-semi-bold text-s">{username}</span>
              <span className="text-xs text-gray-500">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
