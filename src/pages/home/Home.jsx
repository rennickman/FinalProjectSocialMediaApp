import { useState, useEffect, useContext } from 'react';

import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import FriendsBar from '../../components/friendsBar/FriendsBar';
import { AuthContext } from '../../context/AuthContext'
import { getFriendsCall } from '../../apiCalls/getFriendsCall';








const Home = () => {

    const { token } = useContext(AuthContext);
    const [friends, setFriends] = useState([]);


    useEffect(() => {
        getFriendsCall(token, setFriends);
    }, [token]);





    return (
        <>
            <Navbar />

            <div className="homePageContainer">
                <Sidebar friends={friends}/>
                <Feed friends={friends} />
                <FriendsBar friends={friends} />
            </div>
        </> 
    )
}


export default Home;