import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';



export const updateUserInfoCall = async ( token, infoToChange, dispatch) => {

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

        // Dispatch Success action with user
        dispatch({ type: "USER_UPDATE", payload: infoRes.data });
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
};




export const updateUserAvatar = async (file, token, dispatch) => {

    const data = new FormData();
    data.append("user[avatar]", file);

    try {
        // Try to Update Avatar
        const infoRes = await axios.put(baseUrl + `/users/updateInfo`, data,
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );
        // Dispatch Success action with user
        dispatch({ type: "USER_UPDATE", payload: infoRes.data });
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
};

export const updateUserCover = async (file, token, dispatch) => {

    const data = new FormData();
    data.append("user[cover]", file);
    
    try {
        // Try to Update Cover
        const infoRes = await axios.put(baseUrl + `/users/updateInfo`, data,
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );
        // Dispatch Success action with user
        dispatch({ type: "USER_UPDATE", payload: infoRes.data });
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
};