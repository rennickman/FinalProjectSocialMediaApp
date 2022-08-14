import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";

import './navbarNotifications.css';
import { getNotificationsCall } from '../../../apiCalls/getNotificationsCall';
import { AuthContext } from '../../../context/authContext/AuthContext';
import NavbarNotification from '../navbarNotification/NavbarNotification';


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



    return (
        <>
            {/** Notifications Section */}
            <div className="navbarNotifications">
                <div className="navbarNotification">
                    <div className="navbarIcon">
                        <PersonIcon />
                        <span className="navbarNotificationBadge">{followNotifications?.length}</span>
                    </div>
                    <div className="notificationLinks">
                        {followNotifications?.map(notification => (
                            <Link to={'/'}><NavbarNotification notification={notification} /></Link>
                        ))}
                    </div>
                </div>

                <div className="navbarNotification">
                    <div className="navbarIcon">
                        <FavoriteIcon />
                        <span className="navbarNotificationBadge">{likeNotifications?.length}</span>
                    </div>
                    <div className="notificationLinks">
                        {likeNotifications?.map(notification => (
                            <Link to={'/'}><NavbarNotification notification={notification} /></Link>
                        ))}
                    </div>
                </div>

                <div className="navbarNotification">
                    <div className="navbarIcon">
                        <ChatIcon />
                        <span className="navbarNotificationBadge">{commentNotifications?.length}</span>
                    </div>
                    <div className="notificationLinks">
                        {commentNotifications?.map(notification => (
                            <Link to={'/'}><NavbarNotification notification={notification} /></Link>
                        ))}
                    </div>
                </div>
                
            </div>
        </>
    )
}


export default NavbarNotifications;