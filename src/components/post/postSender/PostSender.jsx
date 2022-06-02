import MoreVertIcon from '@mui/icons-material/MoreVert';
import { format } from 'timeago.js';

import './postSender.css';


const PostSender = ({ user, createdAt }) => {


    return (
        <>
            {/** Post Sender Section */}
            <div className="postTop">
                <div className="postTopLeft">
                    <img src='/assets/babyYoda.jpg' alt="Poster Profile Pic" className="postProfilePic" />
                    <span className="postUserName">{user.firstname} {user.surname}</span>
                    <span className="postDate">{format(createdAt)}</span>
                </div>

                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
        </>
    )
}


export default PostSender;