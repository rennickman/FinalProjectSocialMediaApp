import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VideocamIcon from '@mui/icons-material/Videocam';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import MoodIcon from '@mui/icons-material/Mood';

import './share.css';



const Share = () => {


    return (
        <div className='share'>
            <div className="shareWrapper">
                {/** Message Input Section */}
                <div className="shareTop">
                    <img className='shareProfilePic' src="/assets/babyYoda.jpg" alt="Profile Pic" />
                    <input placeholder='Say whatever you want....' className="shareInput" />
                </div>
                <hr className='shareHr'/>

                {/** Other Media Input Section */}
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PhotoCameraIcon htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo</span>
                        </div>

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

                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share;