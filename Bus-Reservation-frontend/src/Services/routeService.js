// routeService.js

import { createUrl } from "../Utils";

// const baseUrl = 'http://localhost:3001/api/routes'; // Replace with your actual API endpoint

const getRoutes = async () => {
  try {
    const url = createUrl('/routes')
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch routes');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching routes:', error);
    throw error; // Re-throw the error to be handled by the component
  }
};

export { getRoutes };