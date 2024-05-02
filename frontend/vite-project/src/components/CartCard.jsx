import React, { useContext } from "react";
import { AiFillStar, AiOutlineStar, AiOutlineShopping, AiFillHeart } from "react-icons/ai";

import { CartContext } from "../context/cart";

const CartCard = () => {
    const { cartItems, setCartItems } = useContext(CartContext);

    const removeFromCart = (product) => {
        const updatedCart = cartItems.filter((item) => item.id !== product.id);
        setCartItems(updatedCart);
        localStorage.setItem("productData", JSON.stringify(updatedCart));
    };

    return (
        <div className="container">
            {cartItems.length === 0 ? (
                <div className="relative flex flex-1 flex-col justify-between mb-10">
                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                        <div className="pr-8 sm:pr-5">
                            <p className="text-base font-semibold text-gray-900">NO ITEMS</p>
                        </div>
                    </div>
                </div>
            ) : (
                cartItems.map((product) => (
                    <div className="product-item" key={product.id}>
                        <div className="shrink-0">
                            <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={product.img} alt={product.name}/>
                        </div>
                        <div className="relative flex flex-1 flex-col justify-between mb-10">
                            <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                <div className="pr-8 sm:pr-5">
                                    <p className="text-base font-semibold text-gray-900">{product.name}</p>
                                    <p className="mx-0 mt-1 mb-0 text-base font-semibold text-gray-900">${product.price}</p>
                                    <p className="mx-0 mt-1 mb-0 text-base font-semibold text-gray-900">Quantity: {product.totalQuantity}</p>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => removeFromCart(product)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default CartCard;
