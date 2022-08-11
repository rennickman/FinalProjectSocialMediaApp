import './chatRoom.css';

import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { getConversationId } from '../../apiCalls/getConversationCall';
import ChatRoomConversation from './chatRoomConversation/ChatRoomConversation';
import ChatRoomForm from './chatRoomForm/ChatRoomForm';





const ChatRoom = ({ userId }) => {

    const [conversationName, setConversationName] = useState("");
    const [conversationId, setConversationId] = useState();
    

    const { token, user } = useContext(AuthContext);

    


    // Set conversation Name
    useEffect(() => {
        if (user.id < userId) {
            setConversationName(`private_${user.id}_${userId}`)
        } else {
            setConversationName(`private_${userId}_${user.id}`)
        }
        
    }, [user.id, userId]);



    // Check for existing conversation
    useEffect(() => {
        if (conversationName) {
            getConversationId(conversationName, token, setConversationId)
        }
    }, [conversationName, token]);



    
    return (
        <>
            <div className="chatRoom">
                <div className="chatRoomWrapper">
                    {conversationId&& <ChatRoomConversation conversationId={conversationId} />}

                    <ChatRoomForm conversationId={conversationId} conversationName={conversationName} userId={userId} setConversationId={setConversationId} />
                </div>
            </div>
        </>
    )
}


export default ChatRoom;