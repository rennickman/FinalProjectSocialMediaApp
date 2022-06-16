import ChatMenu from '../../components/chatMenu/ChatMenu';
import Navbar from '../../components/navbar/Navbar';

import './chat.css';



const Chat = () => {


    return (
        <>
            <Navbar />

            <div className='chat'>
                <ChatMenu />

                <div className="chatRoom">
                    <div className="chatRoomWrapper">

                    </div>
                </div>

                <div className="chatOnlineFriends">
                    <div className="chatOnlineFriendsWrapper"></div>
                </div>
            </div>
        </>
        
    )
}


export default Chat;