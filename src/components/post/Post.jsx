import { useEffect, useState, useContext } from 'react';

import './post.css';
import PostSender from './postSender/PostSender';
import PostContents from './postContents/PostContents';
import PostLikesAndComments from './postLikesAndComments/PostLikesAndComments';
import { FriendsContext } from '../../context/friendsContext/FriendsContext';




const Post = ({ post }) => {

    const { friends } = useContext(FriendsContext);

    const [postUser, setPostUser] = useState();


    // Get User of post from state
    useEffect(() => {
        if(friends) {
            const foundUser = friends.find(friend => friend.id === post.user.id);
            setPostUser(foundUser);
        }
    }, [friends, post.user.id]);



    return (
        <div className='post'>
            <div className="postWrapper">
                {postUser?.image_url && <PostSender postUser={postUser} createdAt={post.created_at} />}
                <PostContents post={post} />
                <PostLikesAndComments postId={post.id} comments={post.comments} likes={post.post_likes} />
            </div>
        </div>
    )
    
}

export default Post;