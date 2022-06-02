import './post.css';
import PostSender from './postSender/PostSender';
import PostContents from './postContents/PostContents';
import PostLikesAndComments from './postLikesAndComments/PostLikesAndComments';



const Post = ({ post }) => {

    

    return (
        <div className='post'>
            <div className="postWrapper">
                <PostSender user={post.user} date={post.created_at} />
                <PostContents message={post.comment} />
                <PostLikesAndComments comments={post.comments} likes={post.post_likes} />
            </div>
        </div>
    )
}

export default Post;