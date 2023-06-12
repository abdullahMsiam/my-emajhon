import React, { useContext } from 'react';
import logo from '../images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error))
    }
    // console.log(user)
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/">Shop</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user &&
                    <>
                        <p>welcome {user.email}</p>
                        <button onClick={handleLogOut}>Sign Out</button>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;