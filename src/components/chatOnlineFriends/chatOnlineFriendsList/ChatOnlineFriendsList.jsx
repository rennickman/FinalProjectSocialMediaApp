import './chatOnlineFriendsList.css';
import ChatOnlineFriend from '../chatOnlineFriend/ChatOnlineFriend';

import { useContext } from 'react';
import { AuthContext } from '../../../context/authContext/AuthContext';



const ChatOnlineFriendsList = ({ setOtherUser }) => {

    const { user } = useContext(AuthContext);

    
    return (
        <div className='onlineFriendsList'>
            {user?.followings?.map(onlineFriend => (
                <ChatOnlineFriend key={onlineFriend.id} onlineFriend={onlineFriend} setOtherUser={setOtherUser} />
            ))}
        </div>
    )
}

export default ChatOnlineFriendsList;