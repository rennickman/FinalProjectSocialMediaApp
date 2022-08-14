
const AuthReducer = (state, action) => {

    switch(action.type) {
        case "LOGIN_START":
            return {
                user: null,
                token: null,
                isFetching: true,
                error: false
            };

        case "LOGIN_SUCCESS":
            return {
                user: action.user,
                token: action.token,
                isFetching: false,
                error: false
            };

        case "LOGIN_FAILURE":
            return {
                user: null,
                token: null,
                isFetching: false,
                error: action.payload
            };

        case "UPDATE_USER":
            return {
                user: action.payload,
                token: state.token,
                isFetching: false,
                error: false
            }

        case "LOGOUT":
            return {
                user: null,
                token: null,
                isFetching: false,
                error: null
            };

        default: 
            return state;
    }
}



export default AuthReducer;