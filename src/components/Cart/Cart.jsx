import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // const cart = props.cart; ----Option: 1;  
    // const { cart } = props; -----Option: 2; 
    // console.log(cart[0]);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if another shortcut:
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        // shortcut: s
        // product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
        // console.log(quantity);
    }
    const tax = total * 5 / 100;
    const grandTotal = total + tax + shipping;

    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: {total.toFixed(2)} </p>
            <p>Total shipping: {shipping} </p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Cart;