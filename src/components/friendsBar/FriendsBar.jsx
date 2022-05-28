import CakeIcon from '@mui/icons-material/Cake'; 

import './friendsBar.css';


const FriendsBar = () => {


    return (
        <div className='friendsBar'>
            <div className="friendsBarWrapper">
                {/** Birthday Section */}
                <div className="friendsBarBirthdayContainer">
                    <CakeIcon className="birthdayIcon" />
                    <span className="birthdayText">
                        <b>Bobby Boy</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>

                {/** Random Post Image */}
                <img src="/assets/babyYoda.jpg" alt="Random Friends Post" className="friendsBarRandomPostImage" />

                {/** Online Friends Section */}
                <h4 className="friendsBarTitle">Online Friends</h4>
                <ul className="friendsBarFriendsList">
                    <li className="friendsBarFriend">
                        <div className="friendsBarProfilePicContainer">
                            <img src="assets/babyYoda.jpg" alt="Friend Profile Pic" className="friendsBarProfilePic" />
                            <span className="friendsBarOnlineStatus"></span>
                        </div>
                        <span className="friendsBarUserName">Tommy Tim</span>
                    </li>

                    <li className="friendsBarFriend">
                        <div className="friendsBarProfilePicContainer">
                            <img src="assets/babyYoda.jpg" alt="Friend Profile Pic" className="friendsBarProfilePic" />
                            <span className="friendsBarOnlineStatus"></span>
                        </div>
                        <span className="friendsBarUserName">Tommy Tim</span>
                    </li>

                    <li className="friendsBarFriend">
                        <div className="friendsBarProfilePicContainer">
                            <img src="assets/babyYoda.jpg" alt="Friend Profile Pic" className="friendsBarProfilePic" />
                            <span className="friendsBarOnlineStatus"></span>
                        </div>
                        <span className="friendsBarUserName">Tommy Tim</span>
                    </li>

                    <li className="friendsBarFriend">
                        <div className="friendsBarProfilePicContainer">
                            <img src="assets/babyYoda.jpg" alt="Friend Profile Pic" className="friendsBarProfilePic" />
                            <span className="friendsBarOnlineStatus"></span>
                        </div>
                        <span className="friendsBarUserName">Tommy Tim</span>
                    </li>

                    <li className="friendsBarFriend">
                        <div className="friendsBarProfilePicContainer">
                            <img src="assets/babyYoda.jpg" alt="Friend Profile Pic" className="friendsBarProfilePic" />
                            <span className="friendsBarOnlineStatus"></span>
                        </div>
                        <span className="friendsBarUserName">Tommy Tim</span>
                    </li>

                    <li className="friendsBarFriend">
                        <div className="friendsBarProfilePicContainer">
                            <img src="assets/babyYoda.jpg" alt="Friend Profile Pic" className="friendsBarProfilePic" />
                            <span className="friendsBarOnlineStatus"></span>
                        </div>
                        <span className="friendsBarUserName">Tommy Tim</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FriendsBar;