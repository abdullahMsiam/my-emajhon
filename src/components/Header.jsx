import React from 'react';
import logo from '../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/shop">Shop</a>
                <a href="/login">login</a>
            </div>
        </div>
    );
};

export default Header;