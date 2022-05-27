import React from 'react';

import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import FriendsList from '../../components/friendsList/FriendsList';




const Home = () => {


    return (
        <>
            <Navbar />

            <div className="homePageContainer">
                <Sidebar />
                <Feed />
                <FriendsList />
            </div>
        </>
        
    )
}






export default Home;