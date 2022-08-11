import { AuthContext } from '../../../context/authContext/AuthContext';
import { useState, useEffect, useContext } from 'react';


import ChatRoomMessage from '../chatRoomMessage/ChatRoomMessage';
import './chatRoomConversation.css';
import { getConversationCall } from '../../../apiCalls/getConversationCall';


const ChatRoomConversation = ({ conversationId }) => {

    const [conversation, setConversation] = useState(undefined);

    const { token, user } = useContext(AuthContext);



    // Fetch conversation if conversation ID exists
    useEffect(() => {
        if (conversationId && conversationId !== "new") {
            getConversationCall(conversationId, token, setConversation);
        }
    }, [conversationId, token]);


    return (
        <>
            <div className="chatRoomTop">
                {conversation?.messages.map(message => (
                    <ChatRoomMessage key={message.id} message={message} currentUserId={user.id} />
                ))}
            </div>
        </>
    )
}


export default ChatRoomConversation;