import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';



export const makePostWithoutImage = async (comment, token) => {

    try {
        // Try to Make Post
        await axios.post(baseUrl + `/posts/`, { "comment": comment },
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
};




export const makePostWithImage = async (comment, file, token) => {

    const data = new FormData();
    data.append("post[comment]", comment);
    data.append("post[image]", file);


    try {
        // Try to Make Post
        await axios.post(baseUrl + `/posts/`, data,
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
};



