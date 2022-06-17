import ChatOnlineFriendsList from '../chatOnlineFriends/chatOnlineFriendsList/ChatOnlineFriendsList';
import './chatOnlineFriends.css';


const ChatOnlineFriends = () => {


    return (
        <>
            <div className="chatOnlineFriends">
                <div className="chatOnlineFriendsWrapper">
                    <ChatOnlineFriendsList />
                </div>
            </div>
        </>
    )
}


export default ChatOnlineFriends;