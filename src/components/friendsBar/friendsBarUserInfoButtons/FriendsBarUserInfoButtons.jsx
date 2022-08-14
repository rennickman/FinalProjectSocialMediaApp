import './friendsBarUserInfoButtons.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { updateUserAvatar, updateUserCover } from '../../../apiCalls/updateUserCall';
import { AuthContext } from '../../../context/authContext/AuthContext';



const FriendsBarUserInfoButtons = ({ follow, followUserHandler, unfollowUserHandler, other }) => {

    const {token, dispatch} = useContext(AuthContext);

    const navigate = useNavigate();

    const [avatarFile, setAvatarFile] = useState(null);
    const [coverFile, setCoverFile] = useState(null);



    const handleProfileChange = () => {
        updateUserAvatar(avatarFile, token, dispatch);
    }


    const handleCoverChange = () => {
        updateUserCover(coverFile, token, dispatch);
    }

   

    if (other) {
        return (
            // Other User
            <>
                {follow ? (
                    <>
                        <button className="friendsBarFollowButton" onClick={unfollowUserHandler}>
                            Unfollow <RemoveIcon />
                        </button>
                        <button className="friendsBarFollowButton" onClick={() => navigate('/chat')}>Chat</button>
                    </>
                ) : (
                    <button className="friendsBarFollowButton" onClick={followUserHandler}>
                        Follow <AddIcon />
                    </button>
                )
                }
            </>
        ) 
    } else {
        // Current User
        return (
            <>
                <label htmlFor='avatarFile' className="shareOption">
                    <EditIcon className="shareIcon" />
                    <span className="shareOptionText">Edit Profile Image</span>
                    <input
                        type="file" id="avatarFile" accept=".png,.jpg,.jpeg" onChange={e => setAvatarFile(e.target.files[0])}
                        style={{ display: "none" }}
                    />
                    {avatarFile && <button onClick={() => handleProfileChange()}>Confirm</button>}
                </label>

                <label htmlFor='coverFile' className="shareOption">
                    <EditIcon className="shareIcon" />
                    <span className="shareOptionText">Edit Cover Image</span>
                    <input
                        type="file" id="coverFile" accept=".png,.jpg,.jpeg" onChange={e => setCoverFile(e.target.files[0])}
                        style={{ display: "none" }}
                    />
                    {coverFile && <button onClick={() => handleCoverChange()}>Confirm</button>}
                </label>
            </>
        )
    }
}

export default FriendsBarUserInfoButtons;