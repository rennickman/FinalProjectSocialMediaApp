import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';




export const userInfoCall = async (userId, token, setUserInfo) => {

    try {
        // Try to Log User In
        const userInfoRes = await axios.get(baseUrl + `/users/${userId}/info`,
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );

        setUserInfo(userInfoRes.data);

    } catch (err) {
        console.log(err);
    }
};