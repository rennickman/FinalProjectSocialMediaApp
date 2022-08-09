import { useContext } from 'react';
import { AuthContext } from '../../../context/authContext/AuthContext';

import './friendsBarFriendsList.css';
import FriendsBarOnlineFriend from '../friendsBarOnlineFriend/FriendsBarOnlineFriend';




const FriendsBarFriendsList = () => {

    const { user } = useContext(AuthContext);


    return (
        <>
            {/** Online Friends Section */}
            <h4 className="friendsBarFriendsTitle">Online Friends</h4>
            <ul className="friendsBarFriendsList">
                {user?.followings?.map(onlineFriend => (
                    <FriendsBarOnlineFriend key={onlineFriend.id} onlineFriend={onlineFriend} />
                ))}
            </ul>
        </>
    )
}



export default FriendsBarFriendsList;
