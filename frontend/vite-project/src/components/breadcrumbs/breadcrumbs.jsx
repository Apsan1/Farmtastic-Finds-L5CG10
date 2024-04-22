import React from 'react'
import './breadcrumbs.css'
import { BiArrowFromLeft } from 'react-icons/bi';


const Breadcrum = (props) => {
    const {product} =props;
  return (
    <div className='breadcrum'>
      HOME<img src={BiArrowFromLeft} alt="" />SHOP <img src={BiArrowFromLeft} alt=""/>{product.category} <img src={BiArrowFromLeft} alt={product.name}/>
    </div>
  )
}

export default Breadcrum
