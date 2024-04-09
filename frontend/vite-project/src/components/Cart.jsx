import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart()

    if (isEmpty) return <p>Your cart is empty</p>

    return (
        <div>
            <h1>Cart</h1>
            <h2>{totalUniqueItems} Unique Items</h2>
            <h2>{totalItems} Total Items</h2>
            <h2>Total: Rs.{cartTotal}</h2>
            <button onClick={() => emptyCart()}>Empty Cart</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Price: Rs.{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cart
