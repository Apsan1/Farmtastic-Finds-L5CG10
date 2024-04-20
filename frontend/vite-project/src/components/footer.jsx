import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

//footer component definition
const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-4 flex-col">
      <ul className="flex space-x-9">
        <li>
          <a href="#" className="flex items-center text-sm font-semibold">
            <FaFacebook className="mr-1" />
            Facebook
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-sm font-semibold">
            <FaTwitter className="mr-1" />
            Twitter
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-sm font-semibold">
            <FaInstagram className="mr-1" />
            Instagram
          </a>
        </li>
      </ul>
      <div className="text-sm">&copy; 2024 Farmtastic-Finds. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
