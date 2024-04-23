import React from 'react'
import './breadcrumbs.css'
import { BiArrowFromLeft } from 'react-icons/bi';

/*
Uncomment this code and use it in the codes below if you want to use the onclick functions.

function onclickCatalog (category) {
  window.location.href = `/category/${category}`; //redirect to category page
}

function onclickProduct (product) {
  window.location.href = `/product/${product.id}`; //redirect to product page
}

function onclickHome () {
  window.location.href = `/`; //redirect to home page
}

*/

const Breadcrum = (props) => {
    const {product} =props;
  return (
    <div className='breadcrum flex flex-row gap-2 justify-left items-center'>
      HOME<img src={BiArrowFromLeft} alt="" />SHOP <img src={BiArrowFromLeft} alt=""/> {product.category} <img src={BiArrowFromLeft} alt=""/> {product.name}
    </div>
  )
}

{/* 

Just an Idea you can use on both above and below code

<button onClick={()=>onclickHome()}>Home</button><BiArrowFromLeft/> 
<button onClick={()=>onclickShop()}>Shop</button> <BiArrowFromLeft/>
<button onClick={()=>onclickCatalog(product.category)}>{product.category}</button> 
<BiArrowFromLeft/>
<button onClick={()=>onclickProduct(product)}>{product.name}</button> 

*/}

export const Categorybreadcrum = (props) => {
  const {category} =props;
  const name = category[0];
  return (
    <div className='breadcrum flex flex-col'>
      HOME<img src={BiArrowFromLeft} alt="" />SHOP <img src={BiArrowFromLeft} alt=""/> {name}
    </div>
  )
}

export default Breadcrum
