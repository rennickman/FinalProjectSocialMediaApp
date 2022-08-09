import { Link } from "react-router-dom";

import './navbar.css';
import NavbarSearch from './navbarSearch/NavbarSearch';
import NavbarLinks from './navbarLinks/NavbarLinks';
import NavbarNotifications from './navbarNotifications/NavbarNotifications';
import NavbarUser from './navbarUser/NavbarUser';





const Navbar = () => {


    return (
        <div className='navbarContainer'>
            {/** Logo Section */}
            <div className="navbarLeft">
                <Link style={{"textDecoration": "none" }} to={"/"}>
                    <span className="navbarLogo">Social Media App</span>
                </Link>
            </div>

            <NavbarSearch />

            <div className="navbarRight">
                <NavbarLinks />
                <NavbarNotifications />
                <NavbarUser />
            </div>
        </div>
    )
}


export default Navbar;