import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';



export const followUserCall = async (userId, token, setFollow) => {

    try {
        // Try to Follow User
        const followRes = await axios.post(baseUrl + `/users/${userId}/follow`, {},
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );
        setFollow(followRes.data);

    } catch (err) {
        console.log(err);
    }
};




export const unfollowUserCall = async (userId, token, setFollow) => {

    try {
        // Try to unfollow user
        await axios.delete(baseUrl + `/users/${userId}/unfollow`,
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );
        setFollow(null);

    } catch (err) {
        console.log(err);
    }
};