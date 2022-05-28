import './feed.css';
import Post from '../post/Post';
import Share from '../share/Share';


import { Posts } from '../../dummyDb';


const Feed = () => {


    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />

                {Posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Feed;