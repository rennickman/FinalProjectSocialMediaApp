import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';


export const getConversationCall = async (conversationId, token, setConversation) => {

    try {
        // Try get conversation
        const conversationRes = await axios.get(baseUrl + `/conversations/${conversationId}`,
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );

        setConversation(conversationRes.data);

    } catch (err) {
        console.log(err);
    } 
}




export const getConversationId = async () => {
    
}