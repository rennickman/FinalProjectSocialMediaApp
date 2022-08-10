import './chatRoom.css';
import ChatRoomMessage from './chatRoomMessage/ChatRoomMessage';

import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { getConversationCall, getConversationId } from '../../apiCalls/getConversationCall';
import { sendFirstMessageCall, sendMessageCall } from '../../apiCalls/sendMessageCall';





const ChatRoom = ({ userId }) => {

    const [conversationName, setConversationName] = useState("");
    const [conversation, setConversation] = useState(undefined);
    const [conversationId, setConversationId] = useState();
    const [newMessage, setNewMessage] = useState("");

    const { token, user } = useContext(AuthContext);

    


    // Set conversation Name
    useEffect(() => {
        if (user.id < userId) {
            setConversationName(`private_${user.id}_${userId}`)
        } else {
            setConversationName(`private_${userId}_${user.id}`)
        }
        // Reset old conversation
        setConversation(undefined);
    }, [user.id, userId]);



    // Check for existing conversation
    useEffect(() => {
        if (conversationName) {
            getConversationId(conversationName, token, setConversationId)
        }
    }, [conversationName, token]);



    // Fetch conversation if conversation ID exists
    useEffect(() => {
        if (conversationId && conversationId !== "new") {
            getConversationCall(conversationId, token, setConversation);
        }
    }, [conversationId, token]);



    // Handles Sending Message
    const sendMessageHandler = () => {
        if (newMessage && conversationId !== "new") {
            sendMessageCall(newMessage, token, conversationId)

        } else if (newMessage && conversationId === "new") {
            sendFirstMessageCall(newMessage, token, conversationName, user.id, userId, setConversationId)
        }
    }


    return (
        <>
            <div className="chatRoom">
                <div className="chatRoomWrapper">
                    <div className="chatRoomTop">
                        {conversation?.messages.map(message => (
                            <ChatRoomMessage key={message.id} message={message} currentUserId={user.id} />
                        ))}

                    </div>

                    <div className="chatRoomBottom">
                        <textarea 
                            className="messageInput" placeholder='Writie something will ya? sake like...'
                            onChange={e => setNewMessage(e.target.value)} value={newMessage}   
                        ></textarea>
                        <button className="messageSubmitButton" onClick={sendMessageHandler}>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ChatRoom;