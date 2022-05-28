import './post.css';
import PostSender from './postSender/PostSender';
import PostContents from './postContents/PostContents';
import PostLikesAndComments from './postLikesAndComments/PostLikesAndComments';

import { Users } from '../../dummyDb';


const Post = ({ post }) => {

    
    // Finding Dummy User for Dummy Post
    const user = Users.filter(user => user.id === post.userId)[0]

    

    return (
        <div className='post'>
            <div className="postWrapper">
                <PostSender user={user} post={post} />
                <PostContents post ={post} />
                <PostLikesAndComments post={post} />
            </div>
        </div>
    )
}

export default Post;