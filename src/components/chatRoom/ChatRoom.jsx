import './chatRoom.css';
import ChatRoomMessage from './chatRoomMessage/ChatRoomMessage';



const ChatRoom = () => {


    return (
        <>
            <div className="chatRoom">
                <div className="chatRoomWrapper">
                    <div className="chatRoomTop">
                        <ChatRoomMessage />
                        <ChatRoomMessage mine />
                        <ChatRoomMessage />
                        <ChatRoomMessage />
                        <ChatRoomMessage />
                        <ChatRoomMessage mine />
                        <ChatRoomMessage mine />
                        <ChatRoomMessage />
                        <ChatRoomMessage />
                        <ChatRoomMessage mine />
                        <ChatRoomMessage />
                        <ChatRoomMessage mine />
                        <ChatRoomMessage />

                    </div>

                    <div className="chatRoomBottom">
                        <textarea className="messageInput" placeholder='Writie something will ya? sake like...'></textarea>
                        <button className="messageSubmitButton">Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ChatRoom;