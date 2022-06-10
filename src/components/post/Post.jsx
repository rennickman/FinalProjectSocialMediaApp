import { useEffect, useState } from 'react';

import './post.css';
import PostSender from './postSender/PostSender';
import PostContents from './postContents/PostContents';
import PostLikesAndComments from './postLikesAndComments/PostLikesAndComments';




const Post = ({ post, friends }) => {


    const [postUser, setPostUser] = useState();

    useEffect(() => {
        const foundUser = friends.find(friend => friend.id === post.user.id);
        setPostUser(foundUser);
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