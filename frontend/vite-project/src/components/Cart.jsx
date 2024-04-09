import React from 'react';

import { Button, Container, Col, Row, Table } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
// import { useThemeHook } from '../Global/ThemeProvider';
import { BsCartCheck, BsCartX } from 'react-icons/bs';

export const Cart = () => {
    // const [theme] = useThemeHook();
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();



    return (
        <Container className="py-4 mt-5">
            {/* Your existing JSX */}
        </Container>
    );
};

export const Additemstocart = () => {
    // Perform any logic you need before redirecting
    
    // For example, emptying the cart
    updateItemQuantity(10)
    emptyCart();
    // Redirect to the desired page
    // history.push('/GlobalComponents/ThemeProvider.jsx'); // Replace '/checkout' with the actual URL you want to redirect to
};

