import './friendsBar.css';
import FriendsBarBirthday from './friendsBarBirthday/FriendsBarBirthday';
import FriendsBarFollowsList from './friendsBarFollowsList/FriendsBarFollowsList';
import FriendsBarFriendsList from './friendsBarFriendsList/FriendsBarFriendsList';
import FriendsBarRandomImage from './friendsBarRandomImage/FriendsBarRandomImage';
import FriendsBarUserInfo from './friendsBarUserInfo/FriendsBarUserInfo';
import { useState, useEffect, useContext } from 'react';
import { getRandomPost } from '../../apiCalls/getRandomPost';
import { AuthContext } from '../../context/authContext/AuthContext';






const FriendsBar = ({ profile, userInfo }) => {



    const [randomPostA, setRandomPostA] = useState();
    const [randomPostB, setRandomPostB] = useState();

    const { token } = useContext(AuthContext)

    useEffect(() => {
        getRandomPost(token, setRandomPostA);
        getRandomPost(token, setRandomPostB);
    }, [token])




    // Friends Bar for the Home Page
    const HomePageFriendsBar = () => {
        return (
            <>
                {randomPostA && <FriendsBarRandomImage randomPost={randomPostA} />}
                <FriendsBarFriendsList />
                {randomPostB && <FriendsBarRandomImage randomPost={randomPostB} />}
            </>
        )
    }

    // Friends Bar for the Profile Page
    const ProfilePageFriendsBar = () => {
        return (
            <>
                <FriendsBarUserInfo userInfo={userInfo} />
                <FriendsBarFollowsList userInfo={userInfo}/>
                {randomPostA && <FriendsBarRandomImage randomPost={randomPostA} />}
                <FriendsBarFriendsList />
            </>
        )
    }





    return (
        <div className='friendsBar'>
            <div className="friendsBarWrapper">
                {profile ? <ProfilePageFriendsBar /> : <HomePageFriendsBar />}
            </div>
        </div>
    )
}

export default FriendsBar;