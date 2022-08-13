import './chatOnlineFriendsList.css';
import ChatOnlineFriend from '../chatOnlineFriend/ChatOnlineFriend';

import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/authContext/AuthContext';
import { getFollowingsCall } from '../../../apiCalls/getFollowingsCall';



const ChatOnlineFriendsList = ({ setOtherUser }) => {

    const { token } = useContext(AuthContext);

    const [followings, setFollowings] = useState();

    useEffect(() => {
        if (token) {
            getFollowingsCall(token, setFollowings);
        }
    }, [token])

    
    return (
        <div className='onlineFriendsList'>
            {followings?.map(onlineFriend => (
                <ChatOnlineFriend key={onlineFriend.id} onlineFriend={onlineFriend} setOtherUser={setOtherUser} />
            ))}
        </div>
    )
}

export default ChatOnlineFriendsList;