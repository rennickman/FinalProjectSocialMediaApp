import ChatOnlineFriendsList from '../chatOnlineFriends/chatOnlineFriendsList/ChatOnlineFriendsList';
import './chatOnlineFriends.css';


const ChatOnlineFriends = ({ setOtherUser }) => {


    return (
        <>
            <div className="chatOnlineFriends">
                <div className="chatOnlineFriendsWrapper">
                    <ChatOnlineFriendsList setOtherUser={setOtherUser} />
                </div>
            </div>
        </>
    )
}


export default ChatOnlineFriends;