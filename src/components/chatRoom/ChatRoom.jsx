import './chatRoom.css';
import ChatRoomMessage from './chatRoomMessage/ChatRoomMessage';

import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { getConversationCall } from '../../apiCalls/getConversationCall';
import { sendMessageCall } from '../../apiCalls/sendMessageCall';





const ChatRoom = ({ userId }) => {


    const [conversation, setConversation] = useState();
    const [conversationId, setConversationId] = useState(1);

    const { token, user } = useContext(AuthContext);

    const [newMessage, setNewMessage] = useState("");




    // Check for existing conversation
    



    // Fetch conversation if conversation ID exists
    useEffect(() => {
        if (conversationId) {
            getConversationCall(conversationId, token, setConversation);
        }
    }, [conversationId, token]);



    // Handles Sending Message
    const sendMessageHandler = () => {
        if (newMessage) {
            sendMessageCall(newMessage, token, conversationId)
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