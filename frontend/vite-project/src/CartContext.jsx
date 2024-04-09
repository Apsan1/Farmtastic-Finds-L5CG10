import React, { createContext, useEffect, useState } from 'react';

// Create a new context
export const CartContext = createContext();

// Create a provider component for the context
export const CartProviders = ({ children }) => {
    // Define your state here
    const [cartItems, setCartItems] = useState(0);

    useEffect(() => {
        localStorage.setItem("cartItems", cartItems)
    },[cartItems])

    useEffect(() => {
        if(localStorage.getItem("cartItems"))
        setCartItems(Number(localStorage.getItem("cartItems")));
    }, [])

    // You can add functions to modify the state here, such as adding or removing items

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};