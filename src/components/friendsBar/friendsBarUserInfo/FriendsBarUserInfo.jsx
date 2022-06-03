import './friendsBarUserInfo.css';



const FriendsBarUserInfo = ({ user }) => {


    return (
        <>
            {/** User Info Section */}
            <h4 className="friendsBarUserTitle">User Information</h4>
            <div className="friendsBarInfo">
                <div className="friendsBarInfoItem">
                    <span className="friendsBarInfoKey">From:</span>
                    <span className="friendsBarInfoValue">{user.originalCity}</span>
                </div>

                <div className="friendsBarInfoItem">
                    <span className="friendsBarInfoKey">Living in:</span>
                    <span className="friendsBarInfoValue">{user.currentCity}</span>
                </div>

                <div className="friendsBarInfoItem">
                    <span className="friendsBarInfoKey">Loves:</span>
                    <span className="friendsBarInfoValue">{user.loves}</span>
                </div>

                <div className="friendsBarInfoItem">
                    <span className="friendsBarInfoKey">Hates:</span>
                    <span className="friendsBarInfoValue">{user.hates}</span>
                </div>

                <div className="friendsBarInfoItem">
                    <span className="friendsBarInfoKey">About me:</span>
                    <span className="friendsBarInfoValue">{user.desc}</span>
                </div>
            </div>
        </>
    )
}

export default FriendsBarUserInfo;