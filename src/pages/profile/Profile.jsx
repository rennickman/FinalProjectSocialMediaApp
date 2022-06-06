import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

import './profile.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import FriendsBar from '../../components/friendsBar/FriendsBar';
import ProfileUserCover from '../../components/profileUser/profileUserCover/ProfileUserCover';
import ProfileUserInfo from '../../components/profileUser/profileUserInfo/ProfileUserInfo';






const Profile = () => {

    const [userInfo, setUserInfo] = useState({})

    // Get User ID passed down to Profile page in Params
    const userId = useParams().userId;


    // Fetch User Info
    useEffect(() => {
        const fetchUserInfo = async () => {
        
            const res = await axios.get(`http://localhost:3000/api/v1/users/${userId}/info`,
                {headers: {
                        "Content-Type": 'application/json',
                        "Authorization": 'Bearer xyMxdj-vW8AJqherNcmMpkvR3K-bJGUfidMEHRsmEkI'
                    }})
            setUserInfo(res.data);
        }
        fetchUserInfo();
    }, [userId])


    

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
                            <Feed userId={userId} />
                            <FriendsBar profile userInfo={userInfo} />
                        </div>
                    </div>
                     
                </div>
            </> 
        </div>
    )
}


export default Profile;