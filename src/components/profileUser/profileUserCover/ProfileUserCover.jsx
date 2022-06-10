import './profileUserCover.css';



const ProfileUserCover = ({ userInfo }) => {

    console.log(userInfo);

    return (
        <>
            <div className="profileCover">
                <img src="assets/babyYoda.jpg" alt="Cover" className="profileCoverPic" />
                <img src={userInfo.image_url} alt="Profile" className="profilePic" />
            </div>
        </>
    )
}

export default ProfileUserCover;