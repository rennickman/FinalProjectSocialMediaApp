import ChatMenu from '../../components/chatMenu/ChatMenu';
import ChatOnlineFriends from '../../components/chatOnlineFriends/ChatOnlineFriends';
import ChatRoom from '../../components/chatRoom/ChatRoom';
import Navbar from '../../components/navbar/Navbar';
import './chat.css';



const Chat = () => {


    return (
        <>
            <Navbar />

            <div className='chat'>
                <ChatMenu />
                <ChatRoom />
                <ChatOnlineFriends />
            </div>
        </>
        
    )
}


export default Chat;