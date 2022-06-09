import SidebarFriend from '../sidebarFriend/SidebarFriend';
import './sidebarFriendsList.css';






const SidebarFriendsList = ({ friends }) => {


    return (
        <>
            {/** Favourite Friends List Section */}
            <ul className="sidebarFriends">
                {friends.map(friend => (
                    <SidebarFriend key={friend.id} friend={friend} />
                ))}
            </ul>
        </>
    )
}


export default SidebarFriendsList;

