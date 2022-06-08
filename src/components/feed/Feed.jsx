import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import './feed.css';
import Post from '../post/Post';
import Share from '../share/Share';
import { AuthContext } from '../../context/AuthContext'
import { getPostsCall } from '../../apiCalls/getPostsCall';



const Feed = ({ userId }) => {


    const { token } = useContext(AuthContext);

    const [posts, setPosts] = useState([]);

    

    // Fetch Posts
    useEffect(() => {
        // Select link based on whether userId has been passed down from profile or not from homepage
        const endpoint = userId ? `/users/${userId}` : "/posts/";
        getPostsCall(endpoint, token, setPosts);
    }, [])



    
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                
                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
                
            </div>
        </div>
    )
}

export default Feed;