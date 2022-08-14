import MoreVertIcon from '@mui/icons-material/MoreVert';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

import './postSender.css';


const PostSender = ({ postUser, createdAt }) => {

    console.log(createdAt);
    
    return (
        <>
            {/** Post Sender Section */}
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${postUser.id}`}>
                        <img src={postUser.image_url} alt="Poster Profile Pic" className="postProfilePic" />
                    </Link>
                    <span className="postUserName">{postUser.firstname} {postUser.surname}</span>
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