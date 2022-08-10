import './chat.css';
import { useState } from 'react';

import ChatMenu from '../../components/chatMenu/ChatMenu';
import ChatOnlineFriends from '../../components/chatOnlineFriends/ChatOnlineFriends';
import ChatRoom from '../../components/chatRoom/ChatRoom';
import Navbar from '../../components/navbar/Navbar';



const Chat = () => {

    const [otherUser, setOtherUser] = useState(0);


    return (
        <>
            <Navbar />

            <div className='chat'>
                <ChatMenu setOtherUser={setOtherUser} />
                <ChatRoom userId={otherUser}/>
                <ChatOnlineFriends setOtherUser={setOtherUser} />
            </div>
        </>
        
    )
}


export default Chat;