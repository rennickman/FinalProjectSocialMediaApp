import { useContext } from 'react';

import './navbarLinks.css';
import { AuthContext } from '../../../context/authContext/AuthContext';
import { logoutCall } from '../../../apiCalls/logoutCall';




const NavbarLinks = () => {

    const { user, token, dispatch } = useContext(AuthContext);



    return (
        <>
            {/** Links Section */}
            <div className="navbarLinks">
                <span className="navbarLink">Homepage</span>
                <span className="navbarLink">Feed</span>
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