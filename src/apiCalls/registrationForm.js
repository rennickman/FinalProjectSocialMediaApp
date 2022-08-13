import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';
const client_id = "pLEqNiPkYsNq7xpKYrzH8YZra6eatRL8kiTxtS_ZTOo";





export const registrationCall = async (email, password, firstName, surname, city, dispatch) => {


    console.log(email);
    console.log(password);
    console.log(firstName);
    console.log(surname);
    console.log(city);



    // Dispatch Login Start Action
    dispatch({ type: 'LOGIN_START' });

    try {
        // Try to Register User
        const tokenRes = await axios.post(baseUrl + "/users",
            {
                "email": email,
                "password": password,
                "firstname": firstName,
                "surname": surname,
                "currentCity": city,
                "client_id": client_id
            }
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