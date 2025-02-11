// src/services/busService.js
import api, { config } from "../../config";
// import axios from 'axios';

const token = `Bearer ${localStorage.getItem("token")}`;
export const addBus = async (busData) => {
  try {
    const response = await api.post(`${config.serverUrl}/buses`, busData, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding bus:", error);
    throw error;
  }
};

// Fetch all buses
export const getBuses = async () => {
  try {
    const response = await api.get(`${config.serverUrl}/buses`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching buses:", error);
    throw error;
  }
};

export default {
  getBuses,
};
