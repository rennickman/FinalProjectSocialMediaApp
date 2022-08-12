import axios from 'axios';


const baseUrl = 'http://localhost:3000/api/v1';


export const getNotificationsCall = async (token, setNotifications) => {

    // Try fetch notifications
    try {
        const notificationsRes = await axios.get(baseUrl + '/notifications',
            { headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` } }
        );

        setNotifications(notificationsRes.data);

    } catch (err) {
        console.log(err);
    }
};


