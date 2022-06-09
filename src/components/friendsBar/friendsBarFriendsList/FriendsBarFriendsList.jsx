import './friendsBarFriendsList.css';
import FriendsBarOnlineFriend from '../friendsBarOnlineFriend/FriendsBarOnlineFriend';




const FriendsBarFriendsList = ({ friends }) => {



    return (
        <>
            {/** Online Friends Section */}
            <h4 className="friendsBarFriendsTitle">Online Friends</h4>
            <ul className="friendsBarFriendsList">
                {friends.map(friend => (
                    <FriendsBarOnlineFriend key={friend.id} friend={friend} />
                ))}
            </ul>
        </>
    )
}



export default FriendsBarFriendsList;
