import './profile.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import FriendsBar from '../../components/friendsBar/FriendsBar';
import ProfileUserCover from '../../components/profileUser/profileUserCover/ProfileUserCover';
import ProfileUserInfo from '../../components/profileUser/profileUserInfo/ProfileUserInfo';




const Profile = () => {


    return (
        <div>
            <>
                <Navbar />

                <div className="profilePageContainer">
                    <Sidebar />

                    <div className="profilePageRight">
                        <div className="profilePageRightTop">
                            <ProfileUserCover />
                            <ProfileUserInfo />
                        </div>

                        <div className="profilePageRightBottom">
                            <Feed userId="6" />
                            <FriendsBar profile />
                        </div>
                    </div>
                </div>
            </> 
        </div>
    )
}


export default Profile;