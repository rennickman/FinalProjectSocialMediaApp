import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';
const client_id = "Mv6upz2f2jqvqulXXpQCGDZ5LbgXqunkLAbZqEi70_I";
const client_secret = "5ENJhgjKD6caOoAij0AJW5jdLlkVNN8XR_BaTZOYoyk";





export const logoutCall = async (token, dispatch) => {
    
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    try {
        // Try to Log User Out
        await axios.post(baseUrl + "/oauth/revoke",
            {
                "token": token,
                "client_id": client_id,
                "client_secret": client_secret
            },
            { headers: { "Content-Type": 'application/json' } }
        );

        // Dispatch Logout action
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.reload();

    } catch (err) {
        console.log(err)
    }
};