import { useRef } from 'react';
import axios from 'axios';

import './loginForm.css';



const LoginForm = () => {


    const emailRef = useRef();
    const passwordRef = useRef();


    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const res = await axios.post("http://localhost:3000/api/v1/oauth/token",
                {
                    "grant_type": "password",
                    "email": emailRef.current.value,
                    "password": passwordRef.current.value,
                    "client_id": "Mv6upz2f2jqvqulXXpQCGDZ5LbgXqunkLAbZqEi70_I",
                    "client_secret": "5ENJhgjKD6caOoAij0AJW5jdLlkVNN8XR_BaTZOYoyk"
                },
                {
                    headers: {
                        "Content-Type": 'application/json',
                }},
            );

            console.log(res);
        } catch(err) {
            console.log(err);
        }

    }



    


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