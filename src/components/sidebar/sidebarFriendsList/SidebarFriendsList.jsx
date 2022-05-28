import SidebarFriend from '../sidebarFriend/SidebarFriend';
import './sidebarFriendsList.css';



// Dummy Users List
import { Users } from '../../../dummyDb';




const SidebarFriendsList = () => {


    return (
        <>
            {/** Favourite Friends List Section */}
            <ul className="sidebarFriends">
                {Users.map(user => (
                    <SidebarFriend key={user.id} user={user} />
                ))}
            </ul>
        </>
    )
}


export default SidebarFriendsList;

