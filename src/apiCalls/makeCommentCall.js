import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';



export const makeCommentCall = async (comment, token, postId) => {

    try {
        // Try to Make Post
        await axios.post(baseUrl + `/posts/${postId}/comments`, { "message": comment },
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
};


