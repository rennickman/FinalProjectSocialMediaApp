import './postSender.css';

import MoreVertIcon from '@mui/icons-material/MoreVert';



const PostSender = ({ user, date }) => {


    return (
        <>
            {/** Post Sender Section */}
            <div className="postTop">
                <div className="postTopLeft">
                    <img src='/assets/babyYoda.jpg' alt="Poster Profile Pic" className="postProfilePic" />
                    <span className="postUserName">{user.firstname} {user.surname}</span>
                    <span className="postDate">5 mins ago</span>
                </div>

                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
        </>
    )
}


export default PostSender;