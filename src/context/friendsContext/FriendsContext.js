import { createContext, useReducer } from 'react';

import FriendsReducer from './FriendsReducer';



// Initial state when App is first started
const INITIAL_STATE = {
    friends: null,
    isFetching: false,
    error: false
};

// Create Context using our Initial State
export const FriendsContext = createContext(INITIAL_STATE);





// Creating wrapper for our context
export const FriendsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(FriendsReducer, INITIAL_STATE);

    // Pass down state to Children(App)
    return (
        <FriendsContext.Provider
            value={{
                friends: state.friends,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </FriendsContext.Provider>
    )
}

