import './friendsBarUserInfoForm.css';



const FriendsBarUserInfoForm = ({ userInfo }) => {

    
    return (
        <>
            <h4 className="friendsBarUserTitle">User Information</h4>
            <div className="friendsBarInfo">
                <div className="friendsBarInfoItem">
                    <span className="friendsBarInfoKey">From:</span>
                    <span className="friendsBarInfoValue">{userInfo?.originalCity}</span>
                </div>

                <div className="friendsBarInfoItem">
                    <span className="friendsBarInfoKey">Living in:</span>
                    <span className="friendsBarInfoValue">{userInfo?.currentCity}</span>
                </div>

                <div className="friendsBarInfoItem">
                    <span className="friendsBarInfoKey">Loves:</span>
                    <span className="friendsBarInfoValue">{userInfo?.loves}</span>
                </div>

                <div className="friendsBarInfoItem">
                    <span className="friendsBarInfoKey">Hates:</span>
                    <span className="friendsBarInfoValue">{userInfo?.hates}</span>
                </div>

                <div className="friendsBarInfoItem">
                    <span className="friendsBarInfoKey">About me:</span>
                    <span className="friendsBarInfoValue">{userInfo?.desc}</span>
                </div>
            </div>
        </>
    )
}

export default FriendsBarUserInfoForm;