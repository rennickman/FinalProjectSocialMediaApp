import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';
const client_id = "Mv6upz2f2jqvqulXXpQCGDZ5LbgXqunkLAbZqEi70_I";
const client_secret = "5ENJhgjKD6caOoAij0AJW5jdLlkVNN8XR_BaTZOYoyk";





export const loginCall = async (email, password, dispatch) => {
    // Dispatch Login Start Action
    dispatch({ type: 'LOGIN_START' });

    try {
        // Try to Log User In
        const tokenRes = await axios.post(baseUrl + "/oauth/token",
            {
                "grant_type": "password",
                "email": email,
                "password": password,
                "client_id": client_id,
                "client_secret": client_secret
            },
            { headers: { "Content-Type": 'application/json' }}
        );

        // Try to get User
        const userRes = await axios.get(baseUrl + `/users/me`,
            {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${tokenRes.data.access_token}`
                }
            });

        console.log(tokenRes.data);
        console.log(userRes.data);

        // Dispatch Success action with user and token
        dispatch({ type: "LOGIN_SUCCESS", user: userRes.data, token: tokenRes.data.access_token });

    } catch (err) {
        // Dispatch Failure Action with error as payload
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
};