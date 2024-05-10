import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CiLock } from "react-icons/ci";

const ProfileSettings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Neema",
    company_name: "Farmtastic Finds",
    password: "admin",
    profileImage: "", // default profile image URL here if needed
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    //  update local storage here
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        profileImage: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate data update
    console.log("Form submitted with data:", formData);
    toggleEdit();
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border border-gray-500 border-2 p-8 relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="flex justify-center mb-4 md:mb-8">
          <label htmlFor="profileImage" className="cursor-pointer">
            {formData.profileImage ? (
              <img
                src={formData.profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto"
              />
            ) : (
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-400">Upload Photo</span>
              </div>
            )}
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
        <div>
          <div className="text-left">
            <h1 className="text-3xl font-bold mb-2">{formData.name}</h1>
            <p className="text-gray-600 mb-4">{`Admin at  ${formData.company_name}`}</p>
            <div className="flex items-center mb-2">
              <div className="text-lg mr-2">
                <CiLock />
              </div>
              <div className=" mr-2">
                <p>Password :</p>
              </div>
              <span>{formData.password}</span>
            </div>

            <button
              onClick={toggleEdit}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              <FontAwesomeIcon icon={faEdit} className="mr-2" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 w-1/2 scale-75">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="company_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone_number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="tel"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleEdit}
                  className="mr-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;
