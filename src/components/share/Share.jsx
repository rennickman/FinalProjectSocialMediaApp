import { useContext, useRef, useState } from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VideocamIcon from '@mui/icons-material/Videocam';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import MoodIcon from '@mui/icons-material/Mood';

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
                            <span className="shareOptionText">Photo</span>
                            <input 
                                type="file" id="file" accept=".png,.jpg,.jpeg" onChange={e => setFile(e.target.files[0])}
                                style={{ display: "none" }} 
                            />
                        </label>

                        <div className="shareOption">
                            <VideocamIcon htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Video</span>
                        </div>

                        <div className="shareOption">
                            <AudiotrackIcon htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Audio</span>
                        </div>

                        <div className="shareOption">
                            <MoodIcon htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Status</span>
                        </div>
                    </div>

                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}

export default Share;