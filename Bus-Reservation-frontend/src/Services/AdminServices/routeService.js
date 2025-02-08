// routeService.js

// import { createUrl } from "../Utils";

// baseUrl 

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend URL

// Fetch all routes
 const getRoutes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/routes`);
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
    const response = await axios.post(`${API_BASE_URL}/routes`, routeData);
    return response.data;
  } catch (error) {
    console.error('Error adding route:', error);
    throw error;
  }
};
