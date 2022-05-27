import React from 'react';


import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';


const SideMenu = () => {


    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                {/** Sidebar Menu Section */}
                <ul className="sidebarMenu">
                    <li className="sidebarMenuItem">
                        <RssFeedIcon className='sidebarMenuIcon' />
                        <span className="sidebarMenuItemText">Feed</span>
                    </li>

                    <li className="sidebarMenuItem">
                        <ChatIcon className='sidebarMenuIcon' />
                        <span className="sidebarMenuItemText">Chat</span>
                    </li>

                    <li className="sidebarMenuItem">
                        <RssFeedIcon className='sidebarMenuIcon' />
                        <span className="sidebarMenuItemText">Feed</span>
                    </li>

                    <li className="sidebarMenuItem">
                        <ChatIcon className='sidebarMenuIcon' />
                        <span className="sidebarMenuItemText">Chat</span>
                    </li>

                    <li className="sidebarMenuItem">
                        <RssFeedIcon className='sidebarMenuIcon' />
                        <span className="sidebarMenuItemText">Feed</span>
                    </li>

                    <li className="sidebarMenuItem">
                        <ChatIcon className='sidebarMenuIcon' />
                        <span className="sidebarMenuItemText">Chat</span>
                    </li>

                    <li className="sidebarMenuItem">
                        <RssFeedIcon className='sidebarMenuIcon' />
                        <span className="sidebarMenuItemText">Feed</span>
                    </li>

                    <li className="sidebarMenuItem">
                        <ChatIcon className='sidebarMenuIcon' />
                        <span className="sidebarMenuItemText">Chat</span>
                    </li>
                </ul>

                <button className="sidebarMenuButton">Show More</button>
                <hr className='sidebarMenuHr'/>

                {/** Favourite Friends List Section */}
                <ul className="sidebarFriends">
                    <li className="sidebarFriend">
                        <img src="/assets/babyYoda.jpg" alt="Friend Profile Pic" className="sidebarFriendProfilePic" />
                        <span className="sidebarFriendName">Bobby Boy</span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/babyYoda.jpg" alt="Friend Profile Pic" className="sidebarFriendProfilePic" />
                        <span className="sidebarFriendName">Bobby Boy</span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/babyYoda.jpg" alt="Friend Profile Pic" className="sidebarFriendProfilePic" />
                        <span className="sidebarFriendName">Bobby Boy</span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/babyYoda.jpg" alt="Friend Profile Pic" className="sidebarFriendProfilePic" />
                        <span className="sidebarFriendName">Bobby Boy</span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/babyYoda.jpg" alt="Friend Profile Pic" className="sidebarFriendProfilePic" />
                        <span className="sidebarFriendName">Bobby Boy</span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/babyYoda.jpg" alt="Friend Profile Pic" className="sidebarFriendProfilePic" />
                        <span className="sidebarFriendName">Bobby Boy</span>
                    </li>

                    <li className="sidebarFriend">
                        <img src="/assets/babyYoda.jpg" alt="Friend Profile Pic" className="sidebarFriendProfilePic" />
                        <span className="sidebarFriendName">Bobby Boy</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu;