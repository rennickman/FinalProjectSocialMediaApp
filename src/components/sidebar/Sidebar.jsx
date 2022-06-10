import './sidebar.css';
import SidebarFriendsList from './sidebarFriendsList/SidebarFriendsList';
import SidebarMenu from './sidebarMenu/SidebarMenu';


const SideMenu = () => {


    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <SidebarMenu />
                <SidebarFriendsList />
            </div>
        </div>
    )
}

export default SideMenu;