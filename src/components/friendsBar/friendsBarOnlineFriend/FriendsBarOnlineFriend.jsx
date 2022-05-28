import './friendsBarOnlineFriend.css';



const FriendsBarOnlineFriend = ({ user }) => {


    return (
        <>  
            {/** Online Friend */}
            <li className="friendsBarFriend">
                <div className="friendsBarProfilePicContainer">
                    <img src={user.profilePic} alt="Friend Profile Pic" className="friendsBarProfilePic" />
                    <span className="friendsBarOnlineStatus"></span>
                </div>
                <span className="friendsBarUserName">{user.userName}</span>
            </li>
        </>
    )
}

export default FriendsBarOnlineFriend;