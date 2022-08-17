import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';


export const getRandomPost = async (token, setRandomPost) => {

    try {
        const randomRes = await axios.get(baseUrl + '/users/randomPost',
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );
        setRandomPost(randomRes.data);

    } catch (err) {
        console.log(err);
    }
};



