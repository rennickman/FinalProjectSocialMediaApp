import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';

import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import { AuthContext } from './context/authContext/AuthContext';
import Chat from './pages/chat/Chat';





function App() {

    const { user } = useContext(AuthContext);


    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={user ? <Home /> : <Login />} />
                    <Route path='profile/:userId' element={user ? <Profile /> : <Login />} />
                    <Route path='/chat' element={user ? <Chat /> : <Login />} />

                    <Route path='login' element={user ? <Navigate to='/' /> : <Login />} />
                    <Route path='register' element={user ? <Navigate to='/' /> : <Register />} />          
                </Routes>
            </Router>
        </div>
    );
}

export default App;
