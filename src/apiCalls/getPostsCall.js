import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';


export const getPostsCall = async (endpoint, token, setPosts) => {

    try {
        const postsRes = await axios.get(baseUrl + endpoint,
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );
        setPosts(postsRes.data);

    } catch (err) {
        console.log(err);
    }
};




