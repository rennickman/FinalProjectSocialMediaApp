import './friendsBarUserInfoButtons.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const FriendsBarUserInfoButtons = ({ follow, followUserHandler, unfollowUserHandler }) => {


    return (
        <>
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
        </>
    )
}

export default FriendsBarUserInfoButtons;