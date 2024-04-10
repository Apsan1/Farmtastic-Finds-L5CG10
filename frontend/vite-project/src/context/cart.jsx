import React, { createContext, useEffect, useState } from 'react';

// Create a new context
export const CartContext = createContext();

// Create a provider component for the context
export const CartProviders = ({ children }) => {
    // Define your state here
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if(cartItems.length)
        localStorage.setItem("productData", JSON.stringify(cartItems))
    },[cartItems])

    useEffect(() => {
        if(JSON.parse(localStorage.getItem("productData"))?.length)
        setCartItems(JSON.parse(localStorage.getItem("productData")));
    
    }, [])

    // You can add functions to modify the state here, such as adding or removing items

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};