import './chatRoomMessage.css';
import { useState, useEffect, useContext } from 'react';
import { FriendsContext } from '../../../context/friendsContext/FriendsContext';
import { format } from 'timeago.js';


const ChatRoomMessage = ({ message, currentUserId }) => {


    const [senderInfo, setSenderInfo] = useState();

    const { friends } = useContext(FriendsContext);
    

    useEffect(() => {
        if (friends) {
            setSenderInfo(friends.filter(friend => friend.id === message.user_id)[0]);
        }
    }, [friends, message])



    return (
        <div className={message.user_id !== currentUserId ? 'message mine' : 'message'}>
            <div className="messageTop">
                <img src={senderInfo?.image_url} alt="" className="messageImage" />
                <p className="messageText">{message.text}</p>
            </div>


            <div className="messageBottom">
                {format(message.created_at)}
            </div>
        </div>
    )
}


export default ChatRoomMessage;