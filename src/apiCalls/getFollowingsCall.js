import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';


export const getFollowingsCall = async (token, setFollowings) => {

    try {
        const followingsRes = await axios.get(baseUrl + '/users/followings',
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );

        setFollowings(followingsRes.data);

    } catch (err) {
        console.log(err);
    }
};
