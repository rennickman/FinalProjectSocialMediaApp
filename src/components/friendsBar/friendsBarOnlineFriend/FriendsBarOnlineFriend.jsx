import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';


import './friendsBarOnlineFriend.css';
import { FriendsContext } from '../../../context/friendsContext/FriendsContext';



const FriendsBarOnlineFriend = ({ onlineFriend }) => {

    const { friends } = useContext(FriendsContext);

    const [followedUser, setFollowedUser] = useState();


    // Get Followed User from state for image url
    useEffect(() => {
        if (friends) {
            const foundUser = friends.find(friend => friend.id === onlineFriend.id);
            setFollowedUser(foundUser);
        }
    }, [friends, onlineFriend]);




    return (
        <>  
            {/** Online Friend */}
            <Link style={{ "textDecoration": "none" }} to={`/profile/${onlineFriend.id}`}>
                <li className="friendsBarFriend">
                    <div className="friendsBarProfilePicContainer">
                        <img src={followedUser?.image_url} alt="Friend Profile Pic" className="friendsBarProfilePic" />
                        <span className="friendsBarOnlineStatus"></span>
                    </div>
                    <span className="friendsBarUserName">
                        {onlineFriend.firstname ? onlineFriend.firstname + onlineFriend.surname : onlineFriend.email}
                    </span>
                </li>
            </Link>
        </>
    )
}

export default FriendsBarOnlineFriend;