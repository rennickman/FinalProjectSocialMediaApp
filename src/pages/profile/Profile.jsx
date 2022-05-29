import './profile.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import FriendsBar from '../../components/friendsBar/FriendsBar';


const Profile = () => {


    return (
        <div>
            <>
                <Navbar />

                <div className="profilePageContainer">
                    <Sidebar />

                    <div className="profilePageRight">
                        <div className="profilePageRightTop">
                            <div className="profileCover">
                                <img src="assets/babyYoda.jpg" alt="Cover Photo" className="profileCoverPic" />
                                <img src="assets/Lennon.jpg" alt="Cover Photo" className="profilePic" />
                            </div>
                            
                            <div className="profileInfo">
                                <h4 className='profileInfoName'>Willy Wonka</h4>
                                <span className='profileInfoStatus'>Milky bars are on me boyos!!!</span>
                            </div>
                        </div>

                        <div className="profilePageRightBottom">
                            <Feed />
                            <FriendsBar profile />
                        </div>
                    </div>
                </div>
            </> 
        </div>
    )
}


export default Profile;