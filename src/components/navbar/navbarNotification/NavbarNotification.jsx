import './navbarNotification.css';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import { FriendsContext } from '../../../context/friendsContext/FriendsContext';
import { AuthContext } from '../../../context/authContext/AuthContext';


const NavbarNotification = ({ notification }) => {

    const [name, setName] = useState();
    const [userId, setUserId] = useState();

    const { friends } = useContext(FriendsContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()


    // Get Id of friend
    useEffect(() => {
        if (notification?.type === "FollowNotification") {
            setUserId(notification.params.follow.follower_id);

        } else if (notification?.type === "LikeNotification") {
            setUserId(notification.params.post_like.user_id);

        } else if (notification?.type === "CommentNotification") {
            setUserId(notification.params.comment.user_id);
        }

    }, [notification]);


    // Get name of friend
    useEffect(() => {
        if (friends && userId) {
            const friend = friends.filter(friend => friend.id === userId);
            setName(friend[0].firstname + " " + friend[0].surname)
        }
        
    }, [friends, userId])


    


    if (name) return (
        <>
            {notification?.type === "FollowNotification" && 
                (<span onClick={() => navigate(`/profile/${userId}`)} className='notificationLink'>{name} followed you</span>)
            }

            {notification?.type === "LikeNotification" && (
                <span onClick={() => navigate(`/profile/${user.id}`)} className='notificationLink'>{name} liked your post</span>)
            }

            {notification?.type === "CommentNotification" && (
                <span onClick={() => navigate(`/profile/${user.id}`)} className='notificationLink'>{name} commented on your post</span>)
            }

        </>
    )
}

export default NavbarNotification;