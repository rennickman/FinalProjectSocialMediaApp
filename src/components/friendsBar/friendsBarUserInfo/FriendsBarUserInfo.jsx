import { useContext, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import './friendsBarUserInfo.css';
import { AuthContext } from '../../../context/authContext/AuthContext';
import { useEffect } from 'react';
import { followUserCall, unfollowUserCall } from '../../../apiCalls/followUser';



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
            {follow ? (
                    <button className="friendsBarFollowButton" onClick={unfollowUserHandler}>
                        Unfollow <RemoveIcon />
                    </button>
                ) : (
                    <button className="friendsBarFollowButton" onClick={followUserHandler}>
                        Follow <AddIcon />
                    </button>
                )
            }

            <h4 className="friendsBarUserTitle">User Information</h4>
            <div className="friendsBarInfo">
                <div className="friendsBarInfoItem">
                    <span className="friendsBarInfoKey">From:</span>
                    <span className="friendsBarInfoValue">{userInfo.originalCity}</span>
                </div>

                <div className="friendsBarInfoItem">
                    <span className="friendsBarInfoKey">Living in:</span>
                    <span className="friendsBarInfoValue">{userInfo.currentCity}</span>
                </div>

                <div className="friendsBarInfoItem">
                    <span className="friendsBarInfoKey">Loves:</span>
                    <span className="friendsBarInfoValue">{userInfo.loves}</span>
                </div>

                <div className="friendsBarInfoItem">
                    <span className="friendsBarInfoKey">Hates:</span>
                    <span className="friendsBarInfoValue">{userInfo.hates}</span>
                </div>

                <div className="friendsBarInfoItem">
                    <span className="friendsBarInfoKey">About me:</span>
                    <span className="friendsBarInfoValue">{userInfo.desc}</span>
                </div>
            </div>
        </>
    )
}

export default FriendsBarUserInfo;