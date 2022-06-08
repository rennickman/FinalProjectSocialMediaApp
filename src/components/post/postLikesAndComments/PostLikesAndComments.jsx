import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import './postLikesAndComments.css';
import { AuthContext } from '../../../context/AuthContext'





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

        try {
            const res = await axios.post(`http://localhost:3000/api/v1/posts/${postId}/post_likes/`, {},
                {headers: {
                        "Content-Type": 'application/json',
                        "Authorization": `Bearer ${token}`
                    }})   
            setLike(res.data);
        } catch(err) {
            console.log(err);
        }
        setLikesCounter(likesCounter + 1);
    }



    const unLikePostHandler = async () => {

        try {
            const res = await axios.delete(`http://localhost:3000/api/v1/posts/${postId}/post_likes/${like.id}`,
                {
                    headers: {
                        "Content-Type": 'application/json',
                        "Authorization": `Bearer ${token}`
                    }
                })

        } catch (err) {
            console.log(err);
        }
        setLikesCounter(likesCounter - 1);
        setLike(null);
    }


    

    


    return (
        <>
            {/** Likes and Comment Section */}
            <div className="postBottom">
                <div className="postBottomLeft">
                    {like ? (
                        <ThumbUpIcon className='likeIcon' htmlColor="blue" onClick={unLikePostHandler} /> 
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