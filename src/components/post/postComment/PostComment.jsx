import './postComment.css';



const PostComment = ({ comment }) => {


    return (
        <div>
            {comment.message}
        </div>
    )
}



export default PostComment;