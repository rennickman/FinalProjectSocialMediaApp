import { createContext, useReducer } from 'react';

import AuthReducer from './AuthReducer';


const testUser = {
    id: 1,
    email: "renn@example.com",
    role: "admin",
    firstname: "Ian",
    surname: "Rennick"
}




// Initial state when App is first started
const INITIAL_STATE = {
    user: testUser,
    token: "bsQNbvWTUfjP6LwI117PcZ4EdgLYsPLewnoZ321ZSTU",
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

