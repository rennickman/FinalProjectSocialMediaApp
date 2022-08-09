import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';



export const sendMessageCall = async (newMessage, token, conversationId) => {

    try {
        // Try to Send a message
        const dmres = await axios.post(baseUrl + `/conversations/${conversationId}/messages`, { "text": newMessage },
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );

        console.log(dmres)
        window.location.reload();

    } catch (err) {
        console.log(err);
    }
};