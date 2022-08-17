import './chatRoomForm.css';

import { useState, useContext } from 'react';
import { sendFirstMessageCall, sendMessageCall } from '../../../apiCalls/sendMessageCall';
import { AuthContext } from '../../../context/authContext/AuthContext';




const ChatRoomForm = ({ conversationId, conversationName, userId, setConversationId }) => {


    const [newMessage, setNewMessage] = useState("");

    const { token, user } = useContext(AuthContext);



    // Handles Sending Message
    const sendMessageHandler = () => {
        if (newMessage && conversationId !== "new") {
            sendMessageCall(newMessage, token, conversationId);
            setNewMessage("");

        } else if (newMessage && conversationId === "new") {
            sendFirstMessageCall(newMessage, token, conversationName, user.id, userId, setConversationId)
        }
    }


    return (
        <>
            <div className="chatRoomBottom">
                <textarea
                    className="messageInput" placeholder='Send a message...'
                    onChange={e => setNewMessage(e.target.value)} value={newMessage}
                ></textarea>
                <button className="messageSubmitButton" onClick={sendMessageHandler}>Send</button>
            </div>
        </>
    )
}


export default ChatRoomForm;