
export const FriendsStart = () => ({
    type: 'FRIENDS_START'
});



export const FriendsSuccess = (friends) => ({
    type: 'FRIENDS_SUCCESS',
    payload: friends
});



export const FetchFriendsFailure = (error) => ({
    type: 'FRIENDS_FAILURE',
    payload: error
});