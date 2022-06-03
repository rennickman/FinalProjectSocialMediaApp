import { useEffect, useState } from 'react';
import axios from 'axios';

import './feed.css';
import Post from '../post/Post';
import Share from '../share/Share';



const Feed = ({ userId }) => {


    const [posts, setPosts] = useState([]);

    // Fetch Posts
    useEffect(() => {
        const fetchFeed = async () => {
            // Select link based on whether userId has been passed down from profile or not from homepage
            let link = userId ? `http://localhost:3000/api/v1/users/${userId}` : "http://localhost:3000/api/v1/posts/";

            const res = await axios.get(link,
                { headers: {
                        "Content-Type": 'application/json',
                        "Authorization": 'Bearer 80Jvk3R51JFLIQUmLYfkn91bbWRd4AF0e_Ky6LVutCQ'
                    }})
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