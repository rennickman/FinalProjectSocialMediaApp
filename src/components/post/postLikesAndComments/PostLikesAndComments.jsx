import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useEffect, useState, useContext, useRef } from 'react';

import './postLikesAndComments.css';
import { AuthContext } from '../../../context/authContext/AuthContext'
import { likePostCall, unlikePostCall } from '../../../apiCalls/likePostCall';
import { makeCommentCall } from '../../../apiCalls/makeCommentCall';





const PostLikesAndComments = ({ comments, likes, postId, setCommentsToggle, commentsToggle }) => {


    const { user } = useContext(AuthContext);
    const { token } = useContext(AuthContext);

    const [likesCounter, setLikesCounter] = useState(likes.length);
    const [like, setLike] = useState([]);

    const newCommentRef = useRef();


    // Check whether post has been liked by user
    useEffect(() => {
        const checkLike = likes.find(like => like.user_id === user.id);
        checkLike ? setLike(checkLike) : setLike(null);
    }, [likes, user.id])



    const likePostHandler = () => {
        likePostCall(postId, token, setLike);
        setLikesCounter(likesCounter + 1);
    }


    const unlikePostHandler = () => {
        unlikePostCall(postId, like.id, token, setLike);
        setLikesCounter(likesCounter - 1);
    }


    const sendCommentHandler = () => {
        makeCommentCall(newCommentRef.current.value, token, postId)
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
                    <span onClick={() => setCommentsToggle(!commentsToggle)} className="postCommentsText">{comments.length} Comments</span>
                </div>
            </div>

            {commentsToggle && (
                <>
                    {/** Message Input Section */}
                    <div className="shareTop">
                        <img className='shareProfilePic' src="/assets/babyYoda.jpg" alt="Profile Pic" />
                        <input placeholder='Say whatever you want....' className="shareInput" ref={newCommentRef} />
                        <button onClick={() => sendCommentHandler()} className="shareButton">Share</button>
                    </div>
                    
                    <hr className='shareHr'/>
                </>
            )}
        </>
    )
}


export default PostLikesAndComments;