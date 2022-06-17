import './chatRoomMessage.css';



const ChatRoomMessage = ({ mine }) => {



    return (
        <div className={mine ? 'message mine' : 'message'}>
            <div className="messageTop">
                <img src="https://thegruelingtruth.com/wp-content/uploads/2018/11/jimcor.jpg" alt="" className="messageImage" />
                <p className="messageText">Hey how the fuck are ya?</p>
            </div>


            <div className="messageBottom">
                1 hour ago
            </div>
        </div>
    )
}


export default ChatRoomMessage;