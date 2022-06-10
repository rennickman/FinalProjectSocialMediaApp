import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './navbarUser.css';
import { AuthContext } from '../../../context/authContext/AuthContext'



const NavbarUser = () => {

    const { user } = useContext(AuthContext);


    return (
        <>
            {/** Profile Pic - Links to profile page */}
            <Link to={`/profile/${user.id}`}>
                <img src="/assets/babyYoda.jpg" alt="profilePic" className="navbarProfilePic" />
            </Link>
        </>
    )
}

export default NavbarUser;