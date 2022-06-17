import './chatMenu.css';

import Conversation from './chatMenuConversation/ChatMenuConversation'

const ChatMenu = () => {



    return (
        <>
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder='Search for friends' type="text" className="chatMenuInput" />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                </div>
            </div>
        </>
    )
}

export default ChatMenu