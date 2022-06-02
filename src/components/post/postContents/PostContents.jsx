import './postContents.css';



const PostContents = ({ message }) => {



    return (
        <>
            {/** Post Contents Section */}
            <div className="postCenter">
                <span className="postText">{message}</span>
                {/** Post Contents Section */}
                <img src='/assets/babyYoda.jpg' alt="Post Pic" className='postImage' />
            </div>
        </>
    )
}



export default PostContents;