import { useContext, useRef, useState } from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import './share.css';
import { AuthContext } from '../../context/authContext/AuthContext'
import { makePostWithoutImage, makePostWithImage } from '../../apiCalls/makePostCall';



const Share = () => {

    const { token, user } = useContext(AuthContext);

    const messageRef = useRef();

    const [file, setFile] = useState(null);



    const submitHandler = async e => {
        e.preventDefault();

        if (file) {
            makePostWithImage(messageRef.current.value, file, token)
        } else {
            makePostWithoutImage(messageRef.current.value, token);
        }
    }



    return (
        <div className='share'>
            <div className="shareWrapper">
                {/** Message Input Section */}
                <div className="shareTop">
                    <img className='shareProfilePic' src={user?.image_url} alt="Profile Pic" />
                    <input placeholder='Say whatever you want....' className="shareInput" ref={messageRef} />
                </div>
                <hr className='shareHr'/>

                {/** Other Media Input Section */}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor='file' className="shareOption">
                            <PhotoCameraIcon htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Upload Photo</span>
                            <input 
                                type="file" id="file" accept=".png,.jpg,.jpeg" onChange={e => setFile(e.target.files[0])}
                                style={{ display: "none" }} 
                            />
                        </label>
                    </div>

                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}

export default Share;