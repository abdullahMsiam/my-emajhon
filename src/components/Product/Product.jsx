import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;

    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img ? img : 'no-image'} alt="" />
            <div className='product-info'>
                <h5>{name}</h5>
                <h5>Price: {price}</h5>
                <p>Manufectures: {seller}</p>
                <p>Ratings: {ratings}stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)}
                className='btn-cart' >Add to cart <FontAwesomeIcon icon={faShoppingBasket} />
            </button>
        </div>
    );
};

export default Product;