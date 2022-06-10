import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import FriendsBar from '../../components/friendsBar/FriendsBar';





const Home = () => {


    return (
        <>
            <Navbar />

            <div className="homePageContainer">
                <Sidebar />
                <Feed />
                <FriendsBar />
            </div>
        </> 
    )
}


export default Home;