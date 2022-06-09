import './sidebar.css';
import SidebarFriendsList from './sidebarFriendsList/SidebarFriendsList';
import SidebarMenu from './sidebarMenu/SidebarMenu';


const SideMenu = ({ friends }) => {


    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <SidebarMenu />
                <SidebarFriendsList friends={friends} />
            </div>
        </div>
    )
}

export default SideMenu;