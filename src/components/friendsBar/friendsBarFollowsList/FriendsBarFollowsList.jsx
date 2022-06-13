import './friendsBarFollowsList.css';
import FriendsBarFollowedFriend from '../friendsBarFollowedFriend/FriendsBarFollowedFriend';



const FriendsBarFollowsList = ({ userInfo }) => {


    return (
        <>
            {/** User Follows Section */}
            <h4 className="friendsBarFollowsTitle">User Follows:</h4>

            <div className="friendsBarFollowsList">
                {userInfo.followings?.map(following => (
                    <FriendsBarFollowedFriend key={following.id} following={following} />
                ))}
            </div>
        </>
    )
}


export default FriendsBarFollowsList;