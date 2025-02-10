// src/services/busService.js
import api, { config } from '../../config';
// import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your actual backend API URL

export const addBus = async (busData) => {
  try {
    const response = await api.post(`${config.serverUrl}/buses`, busData);
    return response.data;
  } catch (error) {
    console.error('Error adding bus:', error);
    throw error;
  }
};

// Fetch all buses
export const getBuses = async () => {
    try {
      const response = await api.get(`${config.serverUrl}/buses`);
      return response.data;
    } catch (error) {
      console.error('Error fetching buses:', error);
      throw error;
    }
  };

export default {
   getBuses
};