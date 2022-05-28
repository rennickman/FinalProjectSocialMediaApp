import './sidebarFriend.css';



const SidebarFriend = ({ user }) => {


    return (
        <>
            {/** Sidebar Favourite Friend */}
            <li className="sidebarFriend">
                <img src={user.profilePic} alt="Friend Profile Pic" className="sidebarFriendProfilePic" />
                <span className="sidebarFriendName">{user.userName}</span>
            </li>
        </>
    )
}


export default SidebarFriend;