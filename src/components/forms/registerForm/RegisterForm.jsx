import { useNavigate } from 'react-router-dom';

import './registerForm.css';



const RegisterForm = () => {


    const navigate = useNavigate();


    return (
        <>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social Media App</h3>
                    <span className="loginDesc">Welcome to what I made bla bla bla</span>
                </div>

                <div className="loginRight">
                    <form className="loginBox">
                        <input type="email" placeholder='Email' className="loginInput" />
                        <input type="password" placeholder='Password' className="loginInput" />
                        <input type="password" placeholder='Confirm Password' className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton" type="button" onClick={() => navigate('/login')}>
                            Log into your account
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default RegisterForm;