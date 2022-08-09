import './profile.css';

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import FriendsBar from '../../components/friendsBar/FriendsBar';
import ProfileUserCover from '../../components/profileUser/profileUserCover/ProfileUserCover';
import ProfileUserInfo from '../../components/profileUser/profileUserInfo/ProfileUserInfo';

import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'

import { AuthContext } from '../../context/authContext/AuthContext';
import { userInfoCall } from '../../apiCalls/userInfoCall';





const Profile = () => {

    // UserInfo stores information about the User who owns the Profile
    const [userInfo, setUserInfo] = useState({})

    // Grab the User Id from the Params - {profile/:userId}
    const paramsUserId = useParams().userId;

    // Grab Token from Context
    const { token } = useContext(AuthContext);


    // Fetch Information about Profile User and store in state
    useEffect(() => {
        userInfoCall(paramsUserId, token, setUserInfo);
    }, [paramsUserId, token]);



    return (
        <div>
            <>
                <Navbar />

                <div className="profilePageContainer">
                    <Sidebar />

                    <div className="profilePageRight">                  
                        <div className="profilePageRightTop">
                            {userInfo?.image_url && <ProfileUserCover userInfo={userInfo} />}
                            <ProfileUserInfo userInfo={userInfo} />
                        </div>
                    
                        <div className="profilePageRightBottom">
                            <Feed userId={paramsUserId} />
                            <FriendsBar profile userInfo={userInfo} />
                        </div>
                    </div>
                     
                </div>
            </> 
        </div>
    )
}


export default Profile;