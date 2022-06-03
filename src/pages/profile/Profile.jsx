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

    const [user, setUser] = useState({})

    // Get User ID passed down to Profile page in Params
    const userId = useParams().userId;


    // Fetch User Info
    useEffect(() => {
        const fetchUserInfo = async () => {
        
            const res = await axios.get(`http://localhost:3000/api/v1/users/${userId}`,
                {
                    headers: {
                        "Content-Type": 'application/json',
                        "Authorization": 'Bearer 80Jvk3R51JFLIQUmLYfkn91bbWRd4AF0e_Ky6LVutCQ'
                    }
                })
            setUser(res.data[0].user);
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
                            <ProfileUserCover user={user} />
                            <ProfileUserInfo user={user} />
                        </div>

                        <div className="profilePageRightBottom">
                            <Feed userId={userId} />
                            <FriendsBar profile user={user} />
                        </div>
                    </div>
                </div>
            </> 
        </div>
    )
}


export default Profile;