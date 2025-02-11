import { config } from "../../config";
import { createUrl } from "../../Utils";
import axios from 'axios';


export async function login(email, password) {
    try {
        //create the endpoint url
        const url = createUrl('users/signin')
        // create the request body
        const body = { email, password }
        const response = await axios.post(url, body)
        return response.data;
    } catch (error) {
        return { status: 'error', error: error }
    }
}


//Register Api call

export async function register(firstName, lastName, email, password, confirmPassword, mobileNo, dob, gender, age, addressLine1, addressLine2, city, state, country, pinCode) {
    try {
        const url = createUrl('users/signup')
        const body = {
            firstName, lastName, email, password, confirmPassword, mobileNo, dob, gender, age,
            'userAddress':
                { addressLine1, addressLine2, city, state, country, pinCode }
        }
        const response = await axios.post(url, body)
        return response.data;
    } catch (error) {
        return { status: 'error', error: error }
    }

}



// Logout function
export const logout = async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No token found. User is not authenticated.');
        }

        // Sending logout request with Authorization header
        const response = await axios.post(`${config.serverUrl}/users/signout`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`,  // Sending token in the header
                'Content-Type': 'application/json'
            }
        });

        // If logout is successful, remove token from localStorage
        localStorage.removeItem('token');
        return response.data;
    } catch (error) {
        console.error('Logout failed:', error.response ? error.response.status : error.message);
        throw error;
    }
};
