import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const { signIn } = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true });
                // Navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin} >
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="" placeholder='password' required />
                    <p onClick={() => setShow(!show)}>
                        <small>
                            {
                                show ? <span>hide password</span> : <span>show password</span>
                            }
                        </small>
                    </p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p> <span>New to emajhon? <Link to="/signup">create an account</Link></span> </p>
        </div>
    );
};

export default Login;