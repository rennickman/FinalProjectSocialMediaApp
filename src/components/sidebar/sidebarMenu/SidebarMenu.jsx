import HomeIcon from '@mui/icons-material/Home';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";


import './sidebarMenu.css';


const SidebarMenu = () => {



    return (
        <>
            {/** Sidebar Menu Section */}
            <ul className="sidebarMenu">
                <Link to={'/'} style={{ "textDecoration": "none" }}>
                    <li className="sidebarMenuItem">
                        <HomeIcon className='sidebarMenuIcon' />
                        <span className="sidebarMenuItemText">Homepage</span>
                    </li>
                </Link>

                <Link to={'/profile'} style={{ "textDecoration": "none" }}>
                    <li className="sidebarMenuItem">
                        <RssFeedIcon className='sidebarMenuIcon' />
                        <span className="sidebarMenuItemText">Feed</span>
                    </li>
                </Link>

                <Link to={'/chat'} style={{ "textDecoration": "none" }}>
                    <li className="sidebarMenuItem">
                        <ChatIcon className='sidebarMenuIcon' />
                        <span className="sidebarMenuItemText">Chat</span>
                    </li>
                </Link>

                <Link to={'/profile'} style={{ "textDecoration": "none" }}>
                    <li className="sidebarMenuItem">
                        <EditIcon className='sidebarMenuIcon' />
                        <span className="sidebarMenuItemText">Edit Account</span>
                    </li>
                </Link >
            </ul>

            <hr className='sidebarMenuHr' />
        </>
    )
}

export default SidebarMenu;