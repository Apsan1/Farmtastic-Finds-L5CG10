import React, { useContext } from 'react';
import { CartContext } from '../CartContext'; // Import the CartContext

const CartCount = ({ size }) => {
  
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <div 
      className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}
    >
      {cartItems}
    </div>
  );
};

export default CartCount;
