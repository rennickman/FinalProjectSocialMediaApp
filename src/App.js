import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { createConsumer } from '@rails/actioncable';

import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import { AuthContext } from './context/authContext/AuthContext';
import Chat from './pages/chat/Chat';
import { FriendsContext } from './context/friendsContext/FriendsContext';





function App() {

    const { user } = useContext(AuthContext);

    const { dispatch } = useContext(FriendsContext);

    useEffect(() => {

        if (user) {

            // Create a Web socket connection to backend using Action Cable
            const cable = createConsumer('ws://localhost:3000/cable')

            const paramsToSend = {
                channel: "UsersChannel"
            }


            const handlers = {
                // Fires when we receive data
                received(data) {
                    dispatch({ type: "FRIENDS_UPDATE", payload: data });
                },

                // Fires when we first connect
                connected() {
                    console.log("connected");
                },

                // Fires when we disconnect
                disconnected() {
                    console.log("disconnected");
                }
            };

            // Creates actual subscription
            const subscription = cable.subscriptions.create(paramsToSend, handlers);

            // Unsubscribe when component dismounts
            return function cleanup() {
                console.log("unsubbing from users");
                subscription.unsubscribe();
            }

        }
    }, [user, dispatch]);



    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={user ? <Home /> : <Login />} />
                    <Route path='profile/:userId' element={user ? <Profile /> : <Login />} />
                    <Route path='chat' element={user ? <Chat /> : <Login />} />

                    <Route path='login' element={user ? <Navigate to='/' /> : <Login />} />
                    <Route path='register' element={user ? <Navigate to='/' /> : <Register />} />          
                </Routes>
            </Router>
        </div>
    );
}

export default App;
