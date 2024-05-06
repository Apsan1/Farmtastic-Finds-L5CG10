import React from 'react'
import './breadcrumbs.css'
import { BiRightArrowAlt } from 'react-icons/bi';


function onclickCatalog (category) {
  window.location.href = `/category/${category}`; //redirect to category page
}

function onclickProduct (product) {
  window.location.href = `/product/${product.id}`; //redirect to product page
}

function onclickHome () {
  window.location.href = `/`; //redirect to home page
}

function onclickShop () {
  window.location.href = `/shop`; //redirect to shop page
}

const Breadcrum = (props) => {
    const {product} =props;
  return (
    <>
    <div className="flex flex-row text-sm font-light items-center gap-1 px-5">
    <button className='transition-tranform hover:scale-105' onClick={()=>onclickHome()}>Home</button> <p className='text-gray-400 text-xs'>/</p>
    <button className='transition-tranform hover:scale-105' onClick={()=>onclickShop()}>Shop</button> <p className='text-gray-400 text-xs'>/</p>
    <button className='transition-tranform hover:scale-105' onClick={()=>onclickCatalog(product.category)}>{product.category}</button><p className='text-gray-400 text-xs'>/</p>
    <button className='transition-tranform hover:scale-105' onClick={()=>onclickProduct(product)}>{product.name}</button> 
    </div>
    </>
  )
}

export const Categorybreadcrum = (props) => {
  const {category} =props;
  const name = category[0];
  return (
    <>
    <div className="flex text-sm font-light flex-row items-center gap-1 px-5">
    <button className='transition-tranform hover:scale-105' onClick={()=>onclickHome()}>Home</button><p className='text-gray-300 text-xs'>/</p>
    <button className='transition-tranform hover:scale-105' onClick={()=>onclickShop()}>Shop</button> <p className='text-gray-400 text-xs'>/</p>
    <button className='transition-tranform hover:scale-105' onClick={()=>onclickCatalog(name)}>{name}</button></div>
    </>
  )
}

export const Shopbreadcrum = () => {
  return (
    <>
    <div className="flex flex-row text-sm font-light items-center gap-1 px-5">
    <button className='transition-tranform hover:scale-105' onClick={()=>onclickHome()}>Home</button><p className='text-gray-400 text-xs '>/</p>
    <button className='transition-tranform hover:scale-105' onClick={()=>onclickShop()}>Shop</button></div>
    </>
  )
}

export default Breadcrum
