import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import { useState, useEffect, useContext } from 'react';

import './navbarNotifications.css';
import { getNotificationsCall } from '../../../apiCalls/getNotificationsCall';
import { AuthContext } from '../../../context/authContext/AuthContext';


const NavbarNotifications = () => {


    const [notifications, setNotifications] = useState();
    const [commentNotifications, setCommentNotifications] = useState();
    const [likeNotifications, setLikeNotifications] = useState();
    const [followNotifications, setFollowNotifications] = useState();

    const { token } = useContext(AuthContext);



    useEffect(() => {
        getNotificationsCall(token, setNotifications);
    }, [token]);


    useEffect(() => {
        if (notifications) {
            setCommentNotifications(notifications.filter(n => n.type === "CommentNotification"));
            setLikeNotifications(notifications.filter(n => n.type === "LikeNotification"));
            setFollowNotifications(notifications.filter(n => n.type === "FollowNotification"));
        }
    }, [notifications])


    console.log(notifications);

    return (
        <>
            {/** Notifications Section */}
            <div className="navbarNotifications">
                <div className="navbarNotification">
                    <PersonIcon />
                    <span className="navbarNotificationBadge">{commentNotifications?.length}</span>
                </div>

                <div className="navbarNotification">
                    <FavoriteIcon />
                    <span className="navbarNotificationBadge">{likeNotifications?.length}</span>
                </div>

                <div className="navbarNotification">
                    <ChatIcon />
                    <span className="navbarNotificationBadge">{followNotifications?.length}</span>
                </div>
            </div>
        </>
    )
}


export default NavbarNotifications;