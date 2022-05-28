import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import './post.css';


import { Users } from '../../dummyDb';


const Post = ({ post }) => {

    
    // Finding Dummy User for Dummy Post
    const user = Users.filter(user => user.id === post.userId)[0]

    

    return (
        <div className='post'>
            <div className="postWrapper">
                {/** Post Details Section */}
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

                {/** Post Contents Section */}
                <div className="postCenter">
                    <span className="postText">{post?.message}</span>
                    <img src={post.photo} alt="Post Pic" className='postImage' />
                </div>

                {/** Liks and Comment Section */}
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUpIcon className='likeIcon' />
                        <FavoriteIcon className='likeIcon' />
                        <span className="postLikeCounter">{post.likes} people like it</span>
                    </div>
                    
                    <div className="postBottomRight">
                        <span className="postCommentsText">{post.comments} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;