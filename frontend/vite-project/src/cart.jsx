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
            <div className="lg:flex justify-between items-center">
                <div className="space-x-4 mt:8 lg:mt-0">
                    <button className="trending_btn" onClick={handleShopClick} >Sale</button>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 pt-8 gap-2 relative">
                <CartCard />
            </div>

            <div className="total border-2 rounded-lg flex justify-between items-center p-3">
                <h1 className="text-4xl font-bold my-4">Total</h1>
                <h2 className="text-2xl font-semibold">{total}$</h2>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Checkout</button>
            </div>
        </div>
    );
}

export default Cart;