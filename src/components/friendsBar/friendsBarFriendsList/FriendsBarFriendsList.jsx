import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/authContext/AuthContext';

import './friendsBarFriendsList.css';
import FriendsBarOnlineFriend from '../friendsBarOnlineFriend/FriendsBarOnlineFriend';
import { getFollowingsCall } from '../../../apiCalls/getFollowingsCall';




const FriendsBarFriendsList = () => {

    const { token } = useContext(AuthContext);

    const [followings, setFollowings] = useState();

    useEffect(() => {
        if(token) {
            getFollowingsCall(token, setFollowings);
        }
    }, [token])


    return (
        <>
            {/** Online Friends Section */}
            <h4 className="friendsBarFriendsTitle">Online Friends</h4>
            <ul className="friendsBarFriendsList">
                {followings?.map(onlineFriend => (
                    <FriendsBarOnlineFriend key={onlineFriend.id} onlineFriend={onlineFriend} />
                ))}
            </ul>
        </>
    )
}



export default FriendsBarFriendsList;
