import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';

import './navbarNotifications.css';


const NavbarNotifications = () => {


    return (
        <>
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
        </>
    )
}


export default NavbarNotifications;