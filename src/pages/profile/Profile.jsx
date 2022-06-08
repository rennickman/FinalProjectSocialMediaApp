import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'

import './profile.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import FriendsBar from '../../components/friendsBar/FriendsBar';
import ProfileUserCover from '../../components/profileUser/profileUserCover/ProfileUserCover';
import ProfileUserInfo from '../../components/profileUser/profileUserInfo/ProfileUserInfo';
import { AuthContext } from '../../context/AuthContext';
import { userInfoCall } from '../../apiCalls/userInfoCall';





const Profile = () => {

    const [userInfo, setUserInfo] = useState({})

    // Get User ID passed down to Profile page in Params
    const paramsUserId = useParams().userId;


    const { token } = useContext(AuthContext);


    // Fetch User Info
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
                            <ProfileUserCover userInfo={userInfo} />
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