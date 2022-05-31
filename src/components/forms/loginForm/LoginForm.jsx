import './loginForm.css';



const LoginForm = () => {


    return (
        <>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social Media App</h3>
                    <span className="loginDesc">Welcome to what I made bla bla bla</span>
                </div>

                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" placeholder='Email' className="loginInput" />                            
                        <input type="password" placeholder='Password' className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a new account</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LoginForm;