import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';


// Fetch all schedules
export const getSchedules = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/schedules`);
      return response.data;
    } catch (error) {
      console.error('Error fetching schedules:', error);
      throw error;
    }
  };


  // Add a new schedule
export const addSchedule = async (scheduleData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/schedules`, scheduleData);
      return response.data;
    } catch (error) {
      console.error('Error adding schedule:', error);
      throw error;
    }
  };