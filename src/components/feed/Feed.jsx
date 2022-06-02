import { useEffect, useState } from 'react';
import axios from 'axios';

import './feed.css';
import Post from '../post/Post';
import Share from '../share/Share';





const Feed = () => {


    const [posts, setPosts] = useState([]);


    useEffect(() => {
        
        const fetchFeed = async () => {
            const res = await axios.get('http://localhost:3000/api/v1/posts/',
                {
                    headers: {
                        "Content-Type": 'application/json',
                        "Authorization": 'Bearer YkYwNV-BjrtCidkSO0mz2tJ45_zoJYpW4UM0BEqvoPM'
                    }
                })
            setPosts(res.data);
        } 
        fetchFeed();
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