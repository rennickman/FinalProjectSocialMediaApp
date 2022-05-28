import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import './post.css';


const Post = () => {


    return (
        <div className='post'>
            <div className="postWrapper">
                {/** Post Details Section */}
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/babyYoda.jpg" alt="Poster Profile Pic" className="postProfilePic" />
                        <span className="postUserName">Ian Rennick</span>
                        <span className="postDate">5 mins ago</span>
                    </div>

                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>

                {/** Post Contents Section */}
                <div className="postCenter">
                    <span className="postText">HEy whats scrocK!??</span>
                    <img src="/assets/babyYoda.jpg" alt="Post Pic" className='postImage' />
                </div>

                {/** Liks and Comment Section */}
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUpIcon className='likeIcon' />
                        <FavoriteIcon className='likeIcon' />
                        <span className="postLikeCounter">32 people like it</span>
                    </div>
                    
                    <div className="postBottomRight">
                        <span className="postCommentsText">9 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;