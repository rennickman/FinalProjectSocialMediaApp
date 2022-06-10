import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';



export const getFriendsCall = async (token, dispatch) => {

    dispatch({ type: 'FRIENDS_START' });

    try {
        const friendsRes = await axios.get(baseUrl + '/users',
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );
        
        dispatch({ type: "FRIENDS_SUCCESS", payload: friendsRes.data });

    } catch (err) {
        console.log(err);
        dispatch({ type: "FRIENDS_FAILURE", payload: err });
    }
};