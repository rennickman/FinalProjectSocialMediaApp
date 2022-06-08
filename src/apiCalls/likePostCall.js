import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';



export const likePostCall = async (postId, token, setLike) => {
    
    try {
        // Try to Log User In
        const likeRes = await axios.post(baseUrl + `/posts/${postId}/post_likes/`, {},
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );

        setLike(likeRes.data);

    } catch (err) {
       console.log(err);
    }
};




export const unlikePostCall = async (postId, likeId, token, setLike) => {

    try {
        // Try to Log User In
        await axios.delete(baseUrl + `/posts/${postId}/post_likes/${likeId}`,
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );

        setLike(null);

    } catch (err) {
        console.log(err);
    }
};