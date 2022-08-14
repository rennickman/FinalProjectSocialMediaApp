
import './profileUserCover.css';



const ProfileUserCover = ({ userInfo }) => {


    return (
        <>
            <div className="profileCover">
                <img src={userInfo.cover_url} alt="Cover" className="profileCoverPic" />
                <img src={userInfo.image_url} alt="Profile" className="profilePic" />
               
            </div>

            
        </>
    )
}

export default ProfileUserCover;