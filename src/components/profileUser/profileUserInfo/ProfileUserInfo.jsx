import './profileUserInfo.css';



const ProfileUserInfo = ({ user }) => {



    return (
        <>
            {/** Profile Name and Status Section */}
            <div className="profileInfo">
                <h4 className='profileInfoName'>{user.firstname} {user.surname}</h4>
                <span className='profileInfoStatus'>{user.status}</span>
            </div>
        </>
    )
}


export default ProfileUserInfo;