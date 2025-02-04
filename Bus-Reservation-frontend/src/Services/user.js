import { createUrl } from "../Utils";
import axios from 'axios';


export async function login(email, password) {
    try {
        //create the endpoint url
        const url = createUrl('users/login')
        // create the request body
        const body = { email, password }
        const response = await axios.post(url, body)
        return response.data;
    } catch (error) {
        return { status: 'error', error: error }
    }
}


//Register Api call

export async function register(firstName, lastName, email, password, mobileNo, dateOfBirth, gender, age, addressLine1, addressLine2, city, state, country, pinCode) {
    try {
        const url = createUrl('users/signup')
        const body = {
            firstName, lastName, email, password, mobileNo, dateOfBirth, gender, age, addressLine1, addressLine2, city, state, country, pinCode
        }
        const response = await axios.post(url,body)
        return response.data;
    } catch (error) {
        return { status: 'error', error: error }
    }

}