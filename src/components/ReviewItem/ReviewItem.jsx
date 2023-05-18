import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handlerRemoveFromCart }) => {
    // console.log(product)
    const { name, id, img, price, quantity, shipping } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p>{name}</p>
                <p>Price:${price}</p>
                <p>Quantity:{quantity}</p>
            </div>
            <button onClick={() => handlerRemoveFromCart(id)} className='delete-btn'> <FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;