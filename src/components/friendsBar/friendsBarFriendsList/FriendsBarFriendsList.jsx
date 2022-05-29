import './friendsBarFriendsList.css';
import FriendsBarOnlineFriend from '../friendsBarOnlineFriend/FriendsBarOnlineFriend';


// Dummy Users List
import { Users } from '../../../dummyDb';



const FriendsBarFriendsList = () => {



    return (
        <>
            {/** Online Friends Section */}
            <h4 className="friendsBarFriendsTitle">Online Friends</h4>
            <ul className="friendsBarFriendsList">
                {Users.map(user => (
                    <FriendsBarOnlineFriend key={user.id} user={user} />
                ))}
            </ul>
        </>
    )
}



export default FriendsBarFriendsList;
