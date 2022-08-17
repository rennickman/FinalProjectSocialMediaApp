import './chatMenuConversation.css';
import { useState, useEffect, useContext } from 'react';
import { FriendsContext } from '../../../context/friendsContext/FriendsContext';


const ChatMenuConversation = ({ conversation, initiated, received, setOtherUser }) => {


    const [userId, setUserId] = useState();
    const [userInfo, setUserInfo] = useState();

    const { friends } = useContext(FriendsContext);


    // Get Other User Id
    useEffect(() => {
        if (initiated) {
            setUserId(conversation.user_b_id);
        } else if (received) {
            setUserId(conversation.user_a_id);
        }
    }, [conversation, initiated, received]);


    // Get other User
    useEffect(() => {
        if(userId && friends) {
            setUserInfo(friends.filter(friend => userId === friend.id)[0]);
        }
    }, [friends, userId])

    

    if (userId) {
        return (
            <div className='conversation' onClick={() => setOtherUser(userId)}>
                <img src={userInfo?.image_url} alt="" className="conversationImg" />
                <span className="conversationName">{userInfo?.firstname} {userInfo?.surname}</span>
            </div>
        )
    }
}

export default ChatMenuConversation;