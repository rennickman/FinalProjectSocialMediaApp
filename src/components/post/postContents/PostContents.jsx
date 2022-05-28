import './postContents.css';



const PostContents = ({ post }) => {



    return (
        <>
            {/** Post Contents Section */}
            <div className="postCenter">
                <span className="postText">{post?.message}</span>
                <img src={post.photo} alt="Post Pic" className='postImage' />
            </div>
        </>
    )
}



export default PostContents;