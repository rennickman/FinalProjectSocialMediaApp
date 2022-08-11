import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';



export const sendMessageCall = async (newMessage, token, conversationId) => {

    try {
        // Try to Send a message
        const dmres = await axios.post(baseUrl + `/conversations/${conversationId}/messages`, { "text": newMessage },
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );

        console.log(dmres)

    } catch (err) {
        console.log(err);
    }
};



export const sendFirstMessageCall = async (newMessage, token, conversationName, userA, userB, setConversationId) => {

    try {
        // Try to Create new conversation
        const newConversationRes = await axios.post(baseUrl + `/conversations/`, 
            { "name": conversationName, "user_a_id": userA, "user_b_id": userB },
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );


        // Try to save message
        await axios.post(baseUrl + `/conversations/${newConversationRes.data.id}/messages`, { "text": newMessage },
           { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );

        setConversationId(newConversationRes.data.id);
        //window.location.reload();

    } catch (err) {
        console.log(err);
    }
};