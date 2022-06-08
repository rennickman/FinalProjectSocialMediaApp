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

        // Dispatch User and Token
        dispatch({ type: "LOGIN_SUCCESS", user: userRes.data, token: tokenRes.data.access_token });

    } catch (err) {
        console.log(err);
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
}