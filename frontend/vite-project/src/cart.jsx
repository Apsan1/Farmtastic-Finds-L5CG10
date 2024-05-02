import React from "react";
import CartCard from "./components/CartCard.jsx";

function handleShopClick() {
    console.log("Shop clicked");
    window.location.href = "/shop";
}

function fetchTotal() {
    const cart = JSON.parse(localStorage.getItem("productData")) || [];
    let total = 0;
    cart.forEach((product) => {
        //remove /kg from the price
        const price = product.price.replace("/kg", "");
        total += parseInt(price);
    });
    return total;
}

const Cart = () => {
    const total = fetchTotal();
    return (
        <div className="container pt-16">
            <div className="space-x-4 mt:8 lg:mt-0">
                    <button className="trending_btn" onClick={handleShopClick} >Back</button>
                </div>
                <div className="flex items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-900">My Cart</h1>
    </div>
          <div className="mx-auto mt-8 max-w-2xl md:mt-12">
      <div className="bg-white shadow">
        <div className="px-4 py-6 sm:px-8 sm:py-10">
          <div className="flow-root">
            <ul className="-my-8">
              <li className="flex flex-col space-y-4 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <CartCard/></li>  </ul>
          </div>
        </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900"><span className="text-s font-bold text-gray-400">$</span>{total}</p>
          </div>
          <div className="mt-6 text-center">
            <button type="button" className="group inline-flex w-full items-center justify-center rounded-md trending_btn px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:trending__btn">
              Checkout
              <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
        </div>
    );
}

export default Cart;