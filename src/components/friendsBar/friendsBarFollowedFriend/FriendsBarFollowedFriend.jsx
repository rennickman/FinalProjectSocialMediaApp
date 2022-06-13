import { useContext, useState, useEffect } from 'react';

import './friendsBarFollowedFriend.css';
import { FriendsContext } from '../../../context/friendsContext/FriendsContext';



const FriendsBarFollowedFriend = ({ following }) => {


    const { friends } = useContext(FriendsContext);

    const [followedUser, setFollowedUser] = useState();



    // Get Followed User from state for image url
    useEffect(() => {
        if (friends) {
            const foundUser = friends.find(friend => friend.id === following.id);
            setFollowedUser(foundUser);
        }
    }, [friends, following]);




    return (
        <>
            <div className="friendsBarFollowedUser">
                {followedUser?.image_url && (
                    <img src={followedUser.image_url} alt="Profile Pic" className="friendsBarFollowedUserPic" />)
                }
               
                <span className="friendsBarFollowedUserName">
                    {following.firstname + following.surname}
                </span>
            </div>
        </>
    )
}


export default FriendsBarFollowedFriend;