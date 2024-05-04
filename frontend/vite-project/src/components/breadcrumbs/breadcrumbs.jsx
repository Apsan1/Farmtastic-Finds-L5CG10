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
    <div className="flex flex-row items-center gap-2">
    <button onClick={()=>onclickHome()}>Home</button><BiRightArrowAlt/>
    <button onClick={()=>onclickShop()}>Shop</button> <BiRightArrowAlt/>
    <button onClick={()=>onclickCatalog(product.category)}>{product.category}</button><BiRightArrowAlt/>
    <button onClick={()=>onclickProduct(product)}>{product.name}</button> 
    </div>
    </>
  )
}

export const Categorybreadcrum = (props) => {
  const {category} =props;
  const name = category[0];
  return (
    <>
    <div className="flex flex-row items-center gap-2">
    <button onClick={()=>onclickHome()}>Home</button><BiRightArrowAlt/>
    <button onClick={()=>onclickShop()}>Shop</button> <BiRightArrowAlt/>
    <button onClick={()=>onclickCatalog(name)}>{name}</button></div>
    </>
  )
}

export const Shopbreadcrum = () => {
  return (
    <>
    <div className="flex flex-row items-center gap-2">
    <button onClick={()=>onclickHome()}>Home</button><BiRightArrowAlt/>
    <button onClick={()=>onclickShop()}>Shop</button></div>
    </>
  )
}

export default Breadcrum
