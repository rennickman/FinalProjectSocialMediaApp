import './chatOnlineFriendsList.css';
import ChatOnlineFriend from '../chatOnlineFriend/ChatOnlineFriend';

import { useContext } from 'react';
import { AuthContext } from '../../../context/authContext/AuthContext';



const ChatOnlineFriendsList = () => {

    const { user } = useContext(AuthContext);

    
    return (
        <div className='onlineFriendsList'>
            {user?.followings?.map(onlineFriend => (
                <ChatOnlineFriend key={onlineFriend.id} onlineFriend={onlineFriend} />
            ))}
        </div>
    )
}

export default ChatOnlineFriendsList;