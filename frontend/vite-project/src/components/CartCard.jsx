import React, { useContext } from "react";
import { AiFillStar, AiOutlineStar, AiOutlineShopping, AiFillHeart } from "react-icons/ai";

import { CartContext } from "../context/cart";

const cart = JSON.parse(localStorage.getItem("productData")) || [];

//put the local storage data in the cart page to display the items which are added to the cart

const CartCard = () => {
    const { cartItems, setCartItems } = useContext(CartContext);

    const removeFromCart = (product) => {
        const updatedCart = cartItems.filter((item) => item.id !== product.id);
        setCartItems(updatedCart);
        localStorage.setItem("productData", JSON.stringify(updatedCart));
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold my-4">Your Cart</h1>
            {cartItems.map((product) => (
    <div key={product.id} className="flex items-center justify-between w-1/2 p-4 gap-9">
        <img src={product.img} alt={product.name} className="border-2 rounded-lg h-100 w-100 object-cover" />
        <div>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <h3 className="text-xl font-light">${product.price}</h3>
            {/*<h3 className="text-xl font-light">{product.quantity}</h3>*/}
        </div>
        <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={() => removeFromCart(product)}
        >
            Remove
        </button>
    </div>
))}

        </div>
    );
}

export default CartCard;