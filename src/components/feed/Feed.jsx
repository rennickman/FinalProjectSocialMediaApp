import { useEffect, useState, useContext } from 'react';

import './feed.css';
import Post from '../post/Post';
import Share from '../share/Share';
import { AuthContext } from '../../context/AuthContext'
import { getPostsCall } from '../../apiCalls/getPostsCall';



const Feed = ({ userId, friends }) => {


    const { token, user } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    

    // Fetch Posts
    useEffect(() => {
        // Select link based on whether userId has been passed down from profile or not from homepage
        const endpoint = userId ? `/users/${userId}` : "/posts/";
        getPostsCall(endpoint, token, setPosts);
    }, [userId, token]);



    
    return (
        <div className='feed'>
            <div className="feedWrapper">
                {!userId && <Share />}
                {userId === user.id.toString() && <Share />}
                
                {posts.map(post => (
                    <Post key={post.id} post={post} friends={friends} />
                ))}
                
            </div>
        </div>
    )
}

export default Feed;