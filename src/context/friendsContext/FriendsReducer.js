const FriendsReducer = (state, action) => {

    switch (action.type) {
        case "FRIENDS_START":
            return {
                friends: null,
                isFetching: true,
                error: false
            };

        case "FRIENDS_SUCCESS":
            return {
                friends: action.payload,
                isFetching: false,
                error: false
            };

        case "FRIENDS_FAILURE":
            return {
                friends: null,
                isFetching: false,
                error: action.payload
            };

        case "FRIENDS_UPDATE":
            return {
                friends: [...state.friends, action.payload],
                isFetching: false,
                error: false
            };

        default:
            return state;
    }
}



export default FriendsReducer;