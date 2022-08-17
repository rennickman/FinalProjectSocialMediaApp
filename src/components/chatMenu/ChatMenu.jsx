import './chatMenu.css';
import { useState, useEffect, useContext } from 'react';

import ChatMenuConversation from './chatMenuConversation/ChatMenuConversation'
import { AuthContext } from '../../context/authContext/AuthContext';
import { getConversationsList } from '../../apiCalls/getConversationCall';



const ChatMenu = ({ setOtherUser }) => {


    const [conversationsList, setConversationsList] = useState();

    const { token } = useContext(AuthContext);


    useEffect(() => {
        if (token) {
            getConversationsList(token, setConversationsList);
        }
    }, [token])


    return (
        <>
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    {conversationsList?.initiated_conversations?.map(conversation => (
                        <ChatMenuConversation key={conversation.id} setOtherUser={setOtherUser} initiated conversation={conversation} />
                    ))}
                    {conversationsList?.received_conversations?.map(conversation => (
                        <ChatMenuConversation key={conversation.id} setOtherUser={setOtherUser} received conversation={conversation} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ChatMenu