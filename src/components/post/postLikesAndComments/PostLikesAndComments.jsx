import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';

import './postLikesAndComments.css';



const PostLikesAndComments = ({ post }) => {


    const [likes, setLikes] = useState(post.likes);
    const [isLiked, setIsLiked] = useState(false);


    const likePostHandler = () => {
        setLikes(isLiked ? likes - 1 : likes + 1);
        setIsLiked(!isLiked);
    }


    return (
        <>
            {/** Likes and Comment Section */}
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUpIcon className='likeIcon' onClick={likePostHandler} />
                    <span className="postLikeCounter">{likes} people like it</span>
                </div>

                <div className="postBottomRight">
                    <span className="postCommentsText">{post.comments} Comments</span>
                </div>
            </div>
        </>
    )
}


export default PostLikesAndComments;