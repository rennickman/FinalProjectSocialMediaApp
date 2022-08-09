import { Link } from "react-router-dom";

import './sidebarFriend.css';



const SidebarFriend = ({ friend }) => {


    return (
        <>
            {/** Sidebar Favourite Friend */}
            <Link style={{ "textDecoration": "none" }} to={`/profile/${friend.id}`}>
                <li className="sidebarFriend">
                    <img src={friend.image_url} alt="Friend Profile Pic" className="sidebarFriendProfilePic" />
                    <span className="sidebarFriendName">
                        {friend.firstname ? friend.firstname + friend.surname : friend.email}
                    </span>
                </li>
            </Link>
        </>
    )
}


export default SidebarFriend;