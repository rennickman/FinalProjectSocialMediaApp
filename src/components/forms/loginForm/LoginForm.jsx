import { useContext, useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';


import './loginForm.css';
import { loginCall } from '../../../apiCalls/loginCall';
import { AuthContext } from '../../../context/AuthContext';



const LoginForm = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    

    const navigate = useNavigate();

    const { isFetching, dispatch } = useContext(AuthContext);


    const handleLogin = async (e) => {
        e.preventDefault();
        
        loginCall(emailRef.current.value, passwordRef.current.value, dispatch);
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
                        <button className="loginButton" disabled={isFetching}>
                            {isFetching ? <CircularProgress color='inherit' /> : "Log In"}
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button type="button" onClick={() => navigate('/register')} className="loginRegisterButton" disabled={isFetching}>
                            {isFetching ? <CircularProgress color='inherit' /> : "Create new Account"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default LoginForm;