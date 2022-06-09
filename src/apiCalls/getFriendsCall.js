import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';



export const getFriendsCall = async (token, setFriends) => {

    try {
        const friendsRes = await axios.get(baseUrl + '/users',
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );
        setFriends(friendsRes.data);

    } catch (err) {
        console.log(err);
    }
};