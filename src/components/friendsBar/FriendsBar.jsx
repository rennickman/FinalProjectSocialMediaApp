import './friendsBar.css';
import FriendsBarBirthday from './friendsBarBirthday/FriendsBarBirthday';
import FriendsBarFollowsList from './friendsBarFollowsList/FriendsBarFollowsList';
import FriendsBarFriendsList from './friendsBarFriendsList/FriendsBarFriendsList';
import FriendsBarRandomImage from './friendsBarRandomImage/FriendsBarRandomImage';
import FriendsBarUserInfo from './friendsBarUserInfo/FriendsBarUserInfo';




const FriendsBar = ({ profile }) => {

    // Friends Bar for the Home Page
    const HomePageFriendsBar = () => {
        return (
            <>
                <FriendsBarBirthday />
                <FriendsBarRandomImage />
                <FriendsBarFriendsList />
                <FriendsBarRandomImage />
            </>
        )
    }

    // Friends Bar for the Profile Page
    const ProfilePageFriendsBar = () => {
        return (
            <>
                <FriendsBarUserInfo />
                <FriendsBarFollowsList />
                <FriendsBarRandomImage />
                <FriendsBarFriendsList />
            </>
        )
    }





    return (
        <div className='friendsBar'>
            <div className="friendsBarWrapper">
                {profile ? <ProfilePageFriendsBar /> : <HomePageFriendsBar />}
            </div>
        </div>
    )
}

export default FriendsBar;