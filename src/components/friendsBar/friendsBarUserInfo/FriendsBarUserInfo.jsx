import { useContext, useState } from 'react';


import './friendsBarUserInfo.css';
import { AuthContext } from '../../../context/authContext/AuthContext';
import { useEffect } from 'react';
import { followUserCall, unfollowUserCall } from '../../../apiCalls/followUser';
import FriendsBarUserInfoForm from '../friendsBarUserInfoForm/FriendsBarUserInfoForm';
import FriendsBarUserInfoButtons from '../friendsBarUserInfoButtons/FriendsBarUserInfoButtons';



const FriendsBarUserInfo = ({ userInfo }) => {

    const { user, token } = useContext(AuthContext);

    const [ follow, setFollow ] = useState();

    
    // Check whether profile user is followed by user
    useEffect(() => {
        if (userInfo.firstname) {
            const checkFollow = userInfo.followers.find(follower => follower.id === user.id);
            checkFollow ? setFollow(checkFollow) : setFollow(null);
        }
    }, [userInfo, user]);
    


    
    const followUserHandler = () => {
        followUserCall(userInfo.id, token, setFollow);
    }


    const unfollowUserHandler = () => {
        unfollowUserCall(userInfo.id, token, setFollow);
    }


    

    return (
        <>
            {/** User Info Section */}  
            {(user.id !== userInfo.id) && 
                <FriendsBarUserInfoButtons follow={follow} followUserHandler={followUserHandler} unfollowUserHandler={unfollowUserHandler} />
            }

            <FriendsBarUserInfoForm userInfo={userInfo} />
        </>
    )
}

export default FriendsBarUserInfo;