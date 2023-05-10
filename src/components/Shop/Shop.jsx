import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        // basic new cart set: 
        // const newCart = [...cart, product]

        // advance sys: 
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id);
        // console.log(product);
    }
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1 : get the product id 
        for (const id in storedCart) {
            // step 2: find product by id ; 
            const addedProduct = products.find(product => product.id === id);
            // step 3: get quantity: 
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: push element to the addedProduct 
                savedCart.push(addedProduct);
                // console.log('added product', addedProduct);
            }
            // step : set in the cart 
            setCart(savedCart);

        }
        // console.log(storedCart);
    }, [products])
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;