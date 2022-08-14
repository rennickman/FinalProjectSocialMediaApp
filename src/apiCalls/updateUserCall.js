import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';



export const updateUserInfoCall = async (comment, token) => {

    try {
        // Try to Make Post
        const infoRes = await axios.put(baseUrl + `/users/updateInfo`, { "comment": comment },
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );

        console.log(infoRes);
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
};




export const updateUserAvatar = async (file, token) => {

    const data = new FormData();
    data.append("user[avatar]", file);

    try {
        // Try to Update Avatar
        await axios.put(baseUrl + `/users/updateInfo`, data,
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
};

export const updateUserCover = async (file, token) => {

    const data = new FormData();
    data.append("user[cover]", file);
    
    try {
        // Try to Update Cover
        await axios.put(baseUrl + `/users/updateInfo`, data,
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
};