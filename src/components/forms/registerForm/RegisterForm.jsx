import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import './registerForm.css';
import { AuthContext } from '../../../context/authContext/AuthContext';
import { registrationCall } from '../../../apiCalls/registrationForm';



const RegisterForm = () => {


    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [city, setCity] = useState("");

    const { isFetching, dispatch } = useContext(AuthContext);

    const [index, setIndex] = useState(1);


    const handleRegistration = async (e) => {
        e.preventDefault();
        if (firstName && surname && city) {
            registrationCall(email, password, firstName, surname, city, dispatch);
        } else {
            alert.throw("Please fill all fields");
        }
    }


    const changeIndex = (e) => {
        e.preventDefault();
        if (password === passwordConfirmation && email) {
            setIndex(2);
        }
    }



    return (
        <>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social Media App</h3>
                    <span className="loginDesc">Welcome to what I made bla bla bla</span>
                </div>

                {index === 1 ? (
                    <div className="loginRight">
                        <form className="loginBox">
                            <input type="email" placeholder='Email' className="loginInput" value={email} 
                                onChange={e => setEmail(e.target.value)}
                            />
                            <input type="password" placeholder='Password' className="loginInput" value={password} 
                                onChange={e => setPassword(e.target.value)}
                            />
                            <input type="password" placeholder='Confirm Password' className="loginInput" value={passwordConfirmation} 
                                onChange={e => setPasswordConfirmation(e.target.value)}
                            />
                            <button className="loginButton" onClick={changeIndex} disabled={isFetching}>Next</button>
                            <button className="loginRegisterButton" type="button" onClick={() => navigate('/login')}>
                                Log into your account
                            </button>
                        </form>
                    </div>
                ) :
                    <div className="loginRight">
                        <form className="loginBox">
                            <input type="text" placeholder='First Name' className="loginInput" value={firstName}
                                onChange={e => setFirstName(e.target.value)} 
                            />
                            <input type="text" placeholder='Surname' className="loginInput" value={surname}
                                onChange={e => setSurname(e.target.value)} 
                            />
                            <input type="text" placeholder='City' className="loginInput" value={city} 
                                onChange={e => setCity(e.target.value)}
                            />
                            <button className="loginButton" onClick={handleRegistration} disabled={isFetching}>Sign Up</button>
                            <button className="loginRegisterButton" type="button" onClick={() => window.location.reload()}>
                                Back
                            </button>
                        </form>
                    </div>
                }
            </div>
        </>
    )
}


export default RegisterForm;