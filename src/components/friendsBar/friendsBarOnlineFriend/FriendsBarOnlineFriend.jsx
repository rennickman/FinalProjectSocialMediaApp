import './friendsBarOnlineFriend.css';



const FriendsBarOnlineFriend = ({ friend }) => {


    return (
        <>  
            {/** Online Friend */}
            <li className="friendsBarFriend">
                <div className="friendsBarProfilePicContainer">
                    <img src={friend.image_url} alt="Friend Profile Pic" className="friendsBarProfilePic" />
                    <span className="friendsBarOnlineStatus"></span>
                </div>
                <span className="friendsBarUserName">
                    {friend.firstname ? friend.firstname + friend.surname : friend.email}
                </span>
            </li>
        </>
    )
}

export default FriendsBarOnlineFriend;