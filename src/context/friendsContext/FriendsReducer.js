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

        default:
            return state;
    }
}



export default FriendsReducer;