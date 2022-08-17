import { Link } from 'react-router-dom';
import { FriendsContext } from '../../../context/friendsContext/FriendsContext';
import './postComment.css';
import { useState, useEffect, useContext } from 'react';
import { format } from 'timeago.js';




const PostComment = ({ comment }) => {


    const [commentUser, setCommentUser] = useState();

    const { friends } = useContext(FriendsContext);

    useEffect(() => {
        if (friends) {
            setCommentUser(friends.filter(friend => friend.id === comment.user_id)[0]);
        }
    }, [friends, comment])



    if (commentUser) {
        return (
            <div className="postComment">
                <div className="commentSender">
                    <Link to={`profile/${commentUser.id}`}>
                        <img src={commentUser.image_url} alt="Poster Profile Pic" className="postProfilePic" />
                    </Link>
                    <span className="postUserName">{commentUser.firstname} {commentUser.surname}</span>
                    <span className="postDate">{format(comment.created_at)}</span>
                </div>
                    
                <div className="commentText">{comment.message}</div>
            </div>
        )
    }
}



export default PostComment;