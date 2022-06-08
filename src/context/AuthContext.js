import { createContext, useReducer } from 'react';

import AuthReducer from './AuthReducer';



// Initial state when App is first started
const INITIAL_STATE = {
    user: {
        id: 3,
        email: "test@case.com",
        role: "user",
        firstname: "Testy",
        surname: "McTesterson",
    },
    token: "y2upmcMgNqPtw_Zl8zR__XdMA7Bi0gGCtwFOWAWp-ag",
    isFetching: false,
    error: false
};

// Create Context using our Initial State
export const AuthContext = createContext(INITIAL_STATE);





// Creating wrapper for our context
export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    // Pass down state to Children(App)
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                token: state.token,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}    
        >
            {children}
        </AuthContext.Provider>
    )
}

