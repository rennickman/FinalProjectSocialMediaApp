import './friendsBar.css';
import FriendsBarBirthday from './friendsBarBirthday/FriendsBarBirthday';
import FriendsBarFriendsList from './friendsBarFriendsList/FriendsBarFriendsList';
import FriendsBarRandomImage from './friendsBarRandomImage/FriendsBarRandomImage';


const FriendsBar = ({ profile }) => {

    // Friends Bar for the Home Page
    const HomePageFriendsBar = () => {
        return (
            <>
                <FriendsBarBirthday />
                <FriendsBarRandomImage />
                <FriendsBarFriendsList />
            </>
        )
    }

    // Friends Bar for the Profile Page
    const ProfilePageFriendsBar = () => {
        return (
            <>
                {/** User Info Section */}
                <h4 className="friendsBarProfileTitle">User Information</h4>
                <div className="friendsBarInfo">
                    <div className="friendsBarInfoItem">
                        <span className="friendsBarInfoKey">From:</span>
                        <span className="friendsBarInfoValue">Newbridge Bai!</span>
                    </div>

                    <div className="friendsBarInfoItem">
                        <span className="friendsBarInfoKey">Something:</span>
                        <span className="friendsBarInfoValue">Bdlsjid sdnlcsd!</span>
                    </div>

                    <div className="friendsBarInfoItem">
                        <span className="friendsBarInfoKey">Something:</span>
                        <span className="friendsBarInfoValue">Bdlsjid sdnlcsd!</span>
                    </div>

                    <div className="friendsBarInfoItem">
                        <span className="friendsBarInfoKey">Something:</span>
                        <span className="friendsBarInfoValue">Bsdfs;jd dslj!</span>
                    </div>

                    <div className="friendsBarInfoItem">
                        <span className="friendsBarInfoKey">Something:</span>
                        <span className="friendsBarInfoValue">saSkjassd!</span>
                    </div>
                </div>



                {/** User Follows Section */}
                <h4 className="friendsBarProfileTitle">User Follows:</h4>
                <div className="friendsBarFollowsList">
                    <div className="friendsBarFollowedUser">
                        <img src="assets/seal.jpg" alt="Profile Pic" className="friendsBarFollowedUserPic" />
                        <span className="friendsBarFollowedUserName">Micky Moore</span>
                    </div>

                    <div className="friendsBarFollowedUser">
                        <img src="assets/seal.jpg" alt="Profile Pic" className="friendsBarFollowedUserPic" />
                        <span className="friendsBarFollowedUserName">Micky Moore</span>
                    </div>

                    <div className="friendsBarFollowedUser">
                        <img src="assets/seal.jpg" alt="Profile Pic" className="friendsBarFollowedUserPic" />
                        <span className="friendsBarFollowedUserName">Micky Moore</span>
                    </div>

                    <div className="friendsBarFollowedUser">
                        <img src="assets/seal.jpg" alt="Profile Pic" className="friendsBarFollowedUserPic" />
                        <span className="friendsBarFollowedUserName">Micky Moore</span>
                    </div>

                    <div className="friendsBarFollowedUser">
                        <img src="assets/seal.jpg" alt="Profile Pic" className="friendsBarFollowedUserPic" />
                        <span className="friendsBarFollowedUserName">Micky Moore</span>
                    </div>

                    <div className="friendsBarFollowedUser">
                        <img src="assets/seal.jpg" alt="Profile Pic" className="friendsBarFollowedUserPic" />
                        <span className="friendsBarFollowedUserName">Micky Moore</span>
                    </div>
                </div>
            </>
        )
    }





    return (
        <div className='friendsBar'>
            <div className="friendsBarWrapper">
                <ProfilePageFriendsBar />
            </div>
        </div>
    )
}

export default FriendsBar;