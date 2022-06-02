import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';

import './postLikesAndComments.css';



const PostLikesAndComments = ({ comments, likes }) => {


    const [likesCounter, setLikesCounter] = useState(likes.length);
    const [isLiked, setIsLiked] = useState(false);


    const likePostHandler = () => {
        setLikesCounter(isLiked ? likesCounter - 1 : likesCounter + 1);
        setIsLiked(!isLiked);
    }


    return (
        <>
            {/** Likes and Comment Section */}
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUpIcon className='likeIcon' onClick={likePostHandler} />
                    <span className="postLikeCounter">{likesCounter} people like it</span>
                </div>

                <div className="postBottomRight">
                    <span className="postCommentsText">{comments.length} Comments</span>
                </div>
            </div>
        </>
    )
}


export default PostLikesAndComments;