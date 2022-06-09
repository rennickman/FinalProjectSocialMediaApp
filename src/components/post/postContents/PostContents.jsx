import './postContents.css';



const PostContents = ({ post }) => {



    return (
        <>
            {/** Post Contents Section */}
            <div className="postCenter">
                <span className="postText">{post.comment}</span>
                {/** Post Contents Section */}

                {post.image_url&& <img src={post.image_url} alt="Post Pic" className='postImage' />}
            </div>
        </>
    )
}



export default PostContents;