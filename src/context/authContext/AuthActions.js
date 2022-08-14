
export const LoginStart = () => ({
    type: 'LOGIN_START'
});



export const LoginSuccess = (user, token) => ({
    type: 'LOGIN_SUCCESS',
    user: user,
    token: token
});



export const LoginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error
});

export const UpdateUser = (user) => ({
    type: "UPDATE_USER",
    payload: user
})

export const Logout = () => ({
    type: "LOGOUT",
})