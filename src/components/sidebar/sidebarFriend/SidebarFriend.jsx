import './sidebarFriend.css';



const SidebarFriend = ({ friend }) => {


    return (
        <>
            {/** Sidebar Favourite Friend */}
            <li className="sidebarFriend">
                <img src='assets/babyYoda.jpg' alt="Friend Profile Pic" className="sidebarFriendProfilePic" />
                <span className="sidebarFriendName">
                    {friend.firstname ? friend.firstname + friend.surname : friend.email}
                </span>
            </li>
        </>
    )
}


export default SidebarFriend;