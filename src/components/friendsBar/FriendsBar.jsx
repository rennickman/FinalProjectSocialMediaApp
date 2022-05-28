import './friendsBar.css';
import FriendsBarBirthday from './friendsBarBirthday/FriendsBarBirthday';
import FriendsBarFriendsList from './friendsBarFriendsList/FriendsBarFriendsList';
import FriendsBarRandomImage from './friendsBarRandomImage/FriendsBarRandomImage';


const FriendsBar = () => {


    return (
        <div className='friendsBar'>
            <div className="friendsBarWrapper">
                <FriendsBarBirthday />
                <FriendsBarRandomImage />
                <FriendsBarFriendsList />
            </div>
        </div>
    )
}

export default FriendsBar;