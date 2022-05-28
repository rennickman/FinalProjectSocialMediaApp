import HomeIcon from '@mui/icons-material/Home';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import WarningIcon from '@mui/icons-material/Warning';
import BugReportIcon from '@mui/icons-material/BugReport';

import './sidebarMenu.css';


const SidebarMenu = () => {



    return (
        <>
            {/** Sidebar Menu Section */}
            <ul className="sidebarMenu">
                <li className="sidebarMenuItem">
                    <HomeIcon className='sidebarMenuIcon' />
                    <span className="sidebarMenuItemText">Homepage</span>
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
                    <CalendarMonthIcon className='sidebarMenuIcon' />
                    <span className="sidebarMenuItemText">Calender</span>
                </li>

                <li className="sidebarMenuItem">
                    <CelebrationIcon className='sidebarMenuIcon' />
                    <span className="sidebarMenuItemText">Events</span>
                </li>

                <li className="sidebarMenuItem">
                    <PhotoCameraIcon className='sidebarMenuIcon' />
                    <span className="sidebarMenuItemText">Photos</span>
                </li>

                <li className="sidebarMenuItem">
                    <SettingsIcon className='sidebarMenuIcon' />
                    <span className="sidebarMenuItemText">Settings</span>
                </li>

                <li className="sidebarMenuItem">
                    <EditIcon className='sidebarMenuIcon' />
                    <span className="sidebarMenuItemText">Edit Account</span>
                </li>

                <li className="sidebarMenuItem">
                    <EmailIcon className='sidebarMenuIcon' />
                    <span className="sidebarMenuItemText">Contact Admin</span>
                </li>

                <li className="sidebarMenuItem">
                    <DeleteIcon className='sidebarMenuIcon' />
                    <span className="sidebarMenuItemText">Delete Account</span>
                </li>

                <li className="sidebarMenuItem">
                    <WarningIcon className='sidebarMenuIcon' />
                    <span className="sidebarMenuItemText">Report Abuse</span>
                </li>

                <li className="sidebarMenuItem">
                    <BugReportIcon className='sidebarMenuIcon' />
                    <span className="sidebarMenuItemText">Report Bug</span>
                </li>
            </ul>

            <button className="sidebarMenuButton">Show More</button>
            <hr className='sidebarMenuHr' />
        </>
    )
}

export default SidebarMenu;