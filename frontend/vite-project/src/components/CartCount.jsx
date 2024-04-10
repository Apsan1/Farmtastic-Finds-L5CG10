import React, { useContext } from 'react';
import { CartContext } from '../context/cart';

const CartCount = ({ size }) => {
  const { cartItems} = useContext(CartContext);
  return (
    <div 
      className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}
    >
      {cartItems.length > 9? '9+' : cartItems.length}
    </div>
  );
};

export default CartCount;
