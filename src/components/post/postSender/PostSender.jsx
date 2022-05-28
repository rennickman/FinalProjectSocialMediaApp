import './postSender.css';

import MoreVertIcon from '@mui/icons-material/MoreVert';



const PostSender = ({ user, post }) => {


    return (
        <>
            {/** Post Sender Section */}
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={user.profilePic} alt="Poster Profile Pic" className="postProfilePic" />
                    <span className="postUserName">{user.userName}</span>
                    <span className="postDate">{post.date}</span>
                </div>

                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
        </>
    )
}


export default PostSender;