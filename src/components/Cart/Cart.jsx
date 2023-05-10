import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // const cart = props.cart; ----Option: 1;  
    // const { cart } = props; -----Option: 2; 
    // console.log(cart[0]);
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = total * 5 / 100;
    const grandTotal = total + tax + shipping;

    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: {total.toFixed(2)} </p>
            <p>Total shipping: {shipping} </p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Cart;