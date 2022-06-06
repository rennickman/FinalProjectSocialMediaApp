import './profileUserInfo.css';



const ProfileUserInfo = ({ userInfo }) => {



    return (
        <>
            {/** Profile Name and Status Section */}
            <div className="profileInfo">
                <h4 className='profileInfoName'>{userInfo.firstname} {userInfo.surname}</h4>
                <span className='profileInfoStatus'>{userInfo.status}</span>
            </div>
        </>
    )
}


export default ProfileUserInfo;