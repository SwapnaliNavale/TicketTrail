// routeService.js

// import { createUrl } from "../Utils";

// baseUrl 
import api, { config } from '../../config';
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend URL


// Get the stored token (assuming you store it in localStorage)
// const getAuthToken = () => {
//   return localStorage.getItem("token"); // Or from context/state if applicable
// };

// Fetch all routes
 const getRoutes = async () => {
  try {
    const response = await api.get(`${config.serverUrl}/routes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching routes:', error);
    throw error;
  }
};


export { getRoutes };

// Add a new route
export const addRoute = async (routeData) => {
  try {
    const response = await api.post(`${config.serverUrl}/routes`, routeData
      
    );
    return response.data;
  } catch (error) {
    console.error('Error adding route:', error);
    throw error;
  }
};
