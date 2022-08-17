import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';
const client_id = "0soa3lW8AdE4GU0MROg2FfC8D7bKNHSmhws_Yt4F_ZI";
const client_secret = "yYeqs-f2LVHVfbLNQE4Pj_B93-oq-OYFL3nO0qFP1lQ";





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
            { headers: { "Content-Type": 'application/json' } }
        );

        // Try to get User
        const userRes = await axios.get(baseUrl + `/users/me`,
            {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${tokenRes.data.access_token}`
                }
            });

        // Dispatch Success action with user and token
        dispatch({ type: "LOGIN_SUCCESS", user: userRes.data, token: tokenRes.data.access_token });

    } catch (err) {
        // Dispatch Failure Action with error as payload
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
};