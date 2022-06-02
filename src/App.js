import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';




function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='profile/:userId' element={<Profile/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
