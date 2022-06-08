import { useContext, useRef } from 'react';
import axios from 'axios';

import './loginForm.css';
import { loginCall } from '../../../apiCalls';
import { AuthContext } from '../../../context/AuthContext';



const LoginForm = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const { user, token, isFetching, error, dispatch } = useContext(AuthContext);


    const handleLogin = async (e) => {
        e.preventDefault();
        
        loginCall(emailRef.current.value, passwordRef.current.value, dispatch);
    }


    console.log(user);
    console.log(token);
    


    return (
        <>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social Media App</h3>
                    <span className="loginDesc">Welcome to what I made bla bla bla</span>
                </div>

                <div className="loginRight" onSubmit={handleLogin}>
                    <form className="loginBox">
                        <input type="email" required placeholder='Email' className="loginInput" ref={emailRef} />                            
                        <input type="password" required placeholder='Password' className="loginInput" ref={passwordRef} />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a new account</button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default LoginForm;