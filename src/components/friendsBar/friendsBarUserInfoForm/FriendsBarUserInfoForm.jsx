import './friendsBarUserInfoForm.css';

import { useState, useContext } from 'react';
import { updateUserInfoCall } from '../../../apiCalls/updateUserCall';
import { AuthContext } from '../../../context/authContext/AuthContext';


const FriendsBarUserInfoForm = ({ userInfo }) => {


    const [editMode, setEditMode] = useState(false);

    const [newCity, setNewCity] = useState("");
    const [newLoves, setNewLoves] = useState("");
    const [newHates, setNewHates] = useState("");
    const [newDesc, setNewDesc] = useState("");

    const { token, user, dispatch } = useContext(AuthContext);

    const handleUserInfoUpdate = () => {
        const infoToChange = {
            "city": newCity !== "" ? newCity : userInfo.currentCity,
            "loves": newLoves !== "" ? newLoves : userInfo.loves,
            "hates": newHates !== "" ? newHates : userInfo.hates,
            "desc": newDesc !== "" ? newDesc : userInfo.desc,
        }

        updateUserInfoCall(token, infoToChange, dispatch);
    }

    
    return (
        <>
            <div className="userInfoWrapper">
                <h4 className="friendsBarUserTitle">User Information</h4>
                <div className="friendsBarInfo">
                    <div className="friendsBarInfoItem">
                        <span className="friendsBarInfoKey">City:</span>
                        {editMode ? (
                            <input type="text" value={newCity} onChange={e => setNewCity(e.target.value)} placeholder={userInfo?.currentCity}></input>
                        ) : (
                            <span className="friendsBarInfoValue">{userInfo?.currentCity}</span>
                        )}
                    </div>

                    <div className="friendsBarInfoItem">
                        <span className="friendsBarInfoKey">Loves:</span>
                        {editMode ? (
                            <input type="text" value={newLoves} onChange={e => setNewLoves(e.target.value)} placeholder={userInfo?.loves}></input>
                        ) : (
                            <span className="friendsBarInfoValue">{userInfo?.loves}</span>
                        )}
                    </div>

                    <div className="friendsBarInfoItem">
                        <span className="friendsBarInfoKey">Hates:</span>
                        {editMode ? (
                            <input type="text" value={newHates} onChange={e => setNewHates(e.target.value)} placeholder={userInfo?.hates}></input>
                        ) : (
                            <span className="friendsBarInfoValue">{userInfo?.hates}</span>
                        )}
                    </div>

                    <div className="friendsBarInfoItem">
                        <span className="friendsBarInfoKey">About me:</span>
                        {editMode ? (
                            <textarea value={newDesc} onChange={e => setNewDesc(e.target.value)} placeholder={userInfo?.desc}></textarea>
                        ) : (
                            <span className="friendsBarInfoValue">{userInfo?.desc}</span>
                        )}
                    </div>
                </div>

                {editMode && <button className='userInfoButton' onClick={() => handleUserInfoUpdate()}>Update</button>}
                {userInfo.id === user.id && <button className='userInfoButton' onClick={() => setEditMode(!editMode)}>Edit Info</button>}
            </div>
        </>
    )
}

export default FriendsBarUserInfoForm;