import CakeIcon from '@mui/icons-material/Cake';

import './friendsBarBirthday.css';




const FriendsBarBirthday = () => {



    return (
        <>
            {/** Birthday Section */}
            <div className="friendsBarBirthdayContainer">
                <CakeIcon className="birthdayIcon" />
                <span className="birthdayText">
                    <b>Bobby Boy</b> and <b>3 other friends</b> have a birthday today.
                </span>
            </div>
        </>
    )
}

export default FriendsBarBirthday;