import { useEffect, useState, useContext } from 'react';

import './feed.css';
import Post from '../post/Post';
import Share from '../share/Share';
import { AuthContext } from '../../context/authContext/AuthContext';
import { FriendsContext } from '../../context/friendsContext/FriendsContext';
import { getPostsCall } from '../../apiCalls/getPostsCall';
import { getFriendsCall } from '../../apiCalls/getFriendsCall';



const Feed = ({ userId }) => {


    const { token, user } = useContext(AuthContext);
    const { dispatch } = useContext(FriendsContext);

    const [posts, setPosts] = useState([]);


    // Fetch Posts
    useEffect(() => {
        // Select link based on whether userId has been passed down from profile or not from homepage
        const endpoint = userId ? `/users/${userId}` : "/posts/";
        getPostsCall(endpoint, token, setPosts);
    }, [userId, token]);


    // Fetch Users
    useEffect(() => {
        getFriendsCall(token, dispatch);
    }, [token, dispatch]);




    return (
        <div className='feed'>
            <div className="feedWrapper">
                {!userId && <Share />}
                {userId === user.id.toString() && <Share />}
                
                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
                
            </div>
        </div>
    )
}

export default Feed;