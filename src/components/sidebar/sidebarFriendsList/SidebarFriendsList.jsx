import { useContext } from 'react';

import { FriendsContext } from '../../../context/friendsContext/FriendsContext';
import SidebarFriend from '../sidebarFriend/SidebarFriend';
import './sidebarFriendsList.css';






const SidebarFriendsList = () => {

    const { friends } = useContext(FriendsContext);


    return (
        <>
            {/** Favourite Friends List Section */}
            <ul className="sidebarFriends">
                {friends?.map(friend => (
                    <SidebarFriend key={friend.id} friend={friend} />
                ))}
            </ul>
        </>
    )
}


export default SidebarFriendsList;

