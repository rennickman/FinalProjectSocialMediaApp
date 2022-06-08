import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useEffect, useState, useContext } from 'react';

import './postLikesAndComments.css';
import { AuthContext } from '../../../context/AuthContext'
import { likePostCall, unlikePostCall } from '../../../apiCalls/likePostCall';





const PostLikesAndComments = ({ comments, likes, postId }) => {


    const { user } = useContext(AuthContext);
    const { token } = useContext(AuthContext);


    const [likesCounter, setLikesCounter] = useState(likes.length);
    const [like, setLike] = useState([]);



    // Check whether post has been liked by user
    useEffect(() => {
        const checkLike = likes.find(like => like.user_id === user.id);
        checkLike ? setLike(checkLike) : setLike(null);
    }, [likes, user.id])



    
    const likePostHandler = async () => {
        likePostCall(postId, token, setLike);
        setLikesCounter(likesCounter + 1);
    }


    const unlikePostHandler = async () => {
        unlikePostCall(postId, like.id, token, setLike);
        setLikesCounter(likesCounter - 1);
    }


    

    
    return (
        <>
            {/** Likes and Comment Section */}
            <div className="postBottom">
                <div className="postBottomLeft">
                    {like ? (
                        <ThumbUpIcon className='likeIcon' htmlColor="blue" onClick={unlikePostHandler} /> 
                        ) : (
                        <ThumbUpIcon className='likeIcon' onClick={likePostHandler} /> 
                        )
                    }
                    
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