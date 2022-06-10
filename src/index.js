import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { FriendsContextProvider } from './context/friendsContext/FriendsContext';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <FriendsContextProvider>
                <App />
            </FriendsContextProvider>  
        </AuthContextProvider>
    </React.StrictMode>
);

