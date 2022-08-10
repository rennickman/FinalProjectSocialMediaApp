import './chatRoomMessage.css';



const ChatRoomMessage = ({ message, currentUserId }) => {


    return (
        <div className={message.user_id !== currentUserId ? 'message mine' : 'message'}>
            <div className="messageTop">
                <img src="https://thegruelingtruth.com/wp-content/uploads/2018/11/jimcor.jpg" alt="" className="messageImage" />
                <p className="messageText">{message.text}</p>
            </div>


            <div className="messageBottom">
                1 hour ago
            </div>
        </div>
    )
}


export default ChatRoomMessage;