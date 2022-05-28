import React from 'react';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';

import './sidebarMenu.css';


const SidebarMenu = () => {



    return (
        <>
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
            <hr className='sidebarMenuHr' />
        </>
    )
}

export default SidebarMenu;