import './registerForm.css';



const RegisterForm = () => {


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
                        <input type="password" placeholder='Confirm Password' className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into your account</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default RegisterForm;