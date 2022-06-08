
export const LoginStart = (userCredentials) => ({
    type: 'LOGIN_START'
});



export const LoginSuccess = (user, token) => ({
    type: 'LOGIN_SUCESS',
    user: user,
    token: token
});



export const LoginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error
});