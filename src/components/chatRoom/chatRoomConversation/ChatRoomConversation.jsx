import { AuthContext } from '../../../context/authContext/AuthContext';
import { useState, useEffect, useContext, useRef } from 'react';
import { createConsumer } from '@rails/actioncable';

import ChatRoomMessage from '../chatRoomMessage/ChatRoomMessage';
import './chatRoomConversation.css';
import { getConversationCall } from '../../../apiCalls/getConversationCall';




const ChatRoomConversation = ({ conversationId }) => {

    const [messages, setMessages] = useState([]);
    const { token, user } = useContext(AuthContext);

    const scrollRef = useRef();


    // Fetch conversation if conversation ID exists
    useEffect(() => {
        if (conversationId && conversationId !== "new") {
            getConversationCall(conversationId, token, setMessages);
        }
    }, [conversationId, token]);




    useEffect(() => {

        if (conversationId && conversationId !== "new") {

            console.log("Hello");
            console.log("conversationId:" + conversationId)

            // Create a Web socket connection to backend using Action Cable
            const cable = createConsumer('ws://localhost:3000/cable')

            const paramsToSend = {
                channel: "ConversationChannel",
                id: conversationId
            }

            const handlers = {
                // Fires when we receive data
                received(data) {
                    setMessages(messages => [...messages, data]);
                },

                // Fires when we first connect
                connected() {
                    console.log("connected");
                },

                // Fires when we disconnect
                disconnected() {
                    console.log("disconnected");
                }
            };
            // Creates actual subscription
            const subscription = cable.subscriptions.create(paramsToSend, handlers);

            // Unsubscribe when component dismounts
            return function cleanup() {
                console.log("unsubbing from ", conversationId);
                subscription.unsubscribe();
            }

        }
    }, [conversationId]);



    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"})
    }, [messages])


    return (
        <>
            <div className="chatRoomTop">
                {messages?.map(message => (
                    <div ref={scrollRef}>
                        <ChatRoomMessage key={message.id} message={message} currentUserId={user.id} />
                    </div>
                ))}
            </div>
        </>
    )
}


export default ChatRoomConversation;