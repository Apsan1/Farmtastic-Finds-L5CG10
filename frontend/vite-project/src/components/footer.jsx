import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const footerAnimation = {
    hidden: {
      y: 100,
    },
    show: {
      y: 0,
      transition: {
        delay: 3.9,
        duration: 0.5,
      }
    }
  };

  return (
    <motion.footer className="flex justify-center items-center py-4 flex-col" variants={footerAnimation} initial="hidden" animate="show">
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
    </motion.footer>
  );
}

export default Footer;
