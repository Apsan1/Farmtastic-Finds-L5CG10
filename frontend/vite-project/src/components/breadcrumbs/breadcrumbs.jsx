import React from 'react';
import './breadcrumbs.css';
import { BiArrowFromLeft } from 'react-icons/bi';

const Breadcrum = ({ category }) => { // Receive category prop
  return (
    <div className='breadcrum'>
      <span>HOME</span>
      <BiArrowFromLeft className="breadcrumb-icon" />
      <span>SHOP</span>
      <BiArrowFromLeft className="breadcrumb-icon" />
      <span>{el.name}</span> {/* Use category data */}
    </div>
  );
};

export default Breadcrum;
