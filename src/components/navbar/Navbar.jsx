import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';

import './navbar.css';


const Navbar = () => {


    return (
        <div className='navbarContainer'>
            {/** Logo Section */}
            <div className="navbarLeft">
                <span className="navbarLogo">Social Media App</span>
            </div>

            {/** Searchbar Section */}
            <div className="navbarCenter">
                <div className="navbarSearchbar">
                    <SearchIcon className='navbarSearchIcon' />
                    <input type="text" className="navbarSearchInput" placeholder='Search for friends...' />
                </div>
            </div>

            <div className="navbarRight">
                {/** Links Section */}
                <div className="navbarLinks">
                    <span className="navbarLink">Homepage</span>
                    <span className="navbarLink">Feed</span>
                </div>

                {/** Notifications Section */}
                <div className="navbarNotifications">
                    <div className="navbarNotification">
                        <PersonIcon />
                        <span className="navbarNotificationBadge">2</span>
                    </div>

                    <div className="navbarNotification">
                        <FavoriteIcon />
                        <span className="navbarNotificationBadge">2</span>
                    </div>

                    <div className="navbarNotification">
                        <ChatIcon />
                        <span className="navbarNotificationBadge">2</span>
                    </div>
                </div>

                {/** Profile Pic */}
                <img src="/assets/babyYoda.jpg" alt="profilePic" className="navbarProfilePic" />
            </div>
        </div>
    )
}

export default Navbar;