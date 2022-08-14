import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';



export const updateUserInfoCall = async ( token, infoToChange) => {

    console.log(infoToChange.city);
    console.log(infoToChange.loves);
    console.log(infoToChange.hates);
    console.log(infoToChange.desc);

    try {
        // Try to Make Post
        const infoRes = await axios.put(baseUrl + `/users/updateInfo`, 
            {   
                "currentCity": infoToChange.city,
                "loves": infoToChange.loves,
                "hates": infoToChange.hates,
                "desc": infoToChange.desc
            },
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