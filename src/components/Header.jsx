import React from 'react';
import logo from '../images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/">Shop</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">login</Link>
            </div>
        </div>
    );
};

export default Header;