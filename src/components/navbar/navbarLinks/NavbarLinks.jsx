import { useContext } from 'react';
import { Link } from "react-router-dom";

import './navbarLinks.css';
import { AuthContext } from '../../../context/authContext/AuthContext';
import { logoutCall } from '../../../apiCalls/logoutCall';




const NavbarLinks = () => {

    const { user, token, dispatch } = useContext(AuthContext);


    return (
        <>
            {/** Links Section */}
            <div className="navbarLinks">
                <Link style={{ "textDecoration": "none" }} to={"/"}>
                    <span className="navbarLink">Homepage</span>
                </Link>

                <Link style={{ "textDecoration": "none" }} to={`/profile/${user.id}`}>
                    <span className="navbarLink">Feed</span>
                </Link>

                <Link style={{ "textDecoration": "none" }} to={"/chat"}>
                    <span className="navbarLink">Chat</span>
                </Link>

                {user ? (
                    <span className="navbarLink" onClick={() => logoutCall(token, dispatch)}>Logout</span>
                ) : (
                    <span className="navbarLink">Login</span>
                )
                }
                
            </div>
        </>
    )
}


export default NavbarLinks;