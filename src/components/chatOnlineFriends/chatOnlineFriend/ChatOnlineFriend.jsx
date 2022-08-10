import './chatOnlineFriend.css';

import { useContext, useState, useEffect } from 'react';
import { FriendsContext } from '../../../context/friendsContext/FriendsContext';


const ChatOnlineFriend = ({ onlineFriend, setOtherUser }) => {

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
            <div className="chatOnlineFriend" onClick={() => setOtherUser(onlineFriend.id)}>
                <div className="chatOnlineImageContainer">
                    <img src={followedUser?.image_url} alt="" className="chatOnlineImage" />
                    <div className="chatOnlineBadge"></div>
                </div>

                <div className="chatOnlineUserName">
                    {onlineFriend.firstname ? onlineFriend.firstname + onlineFriend.surname : onlineFriend.email}
                </div>
            </div>
        </>
    )
}


export default ChatOnlineFriend;