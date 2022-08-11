import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';


export const getConversationCall = async (conversationId, token, setMessages) => {

    try {
        // Try get conversation
        const conversationRes = await axios.get(baseUrl + `/conversations/${conversationId}`,
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );

        setMessages(conversationRes.data.messages);

    } catch (err) {
        console.log(err);
    } 
}




export const getConversationId = async (conversationName, token, setConversationId) => {
    
    try {
        // Try get ID
        const conversationIdRes = await axios.get(baseUrl + `/conversations/check/${conversationName}`,
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );


        if (conversationIdRes.data.length === 1) {
            setConversationId(conversationIdRes.data[0].id);
        } else {
            setConversationId("new");
        }


    } catch (err) {
        console.log(err);
    }
}