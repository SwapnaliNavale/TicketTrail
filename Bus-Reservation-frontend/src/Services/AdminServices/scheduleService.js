// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080';
import api, { config } from '../../config';

const token = `Bearer ${localStorage.getItem('token')}`
// Fetch all schedules
export const getSchedules = async () => {
    try {
      const response = await api.get(`${config.serverUrl}/schedules`,
      {
        headers:{
          Authorization:token
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching schedules:', error);
      throw error;
    }
  };


  // Add a new schedule
export const addSchedule = async (scheduleData) => {
    try {
      const response = await api.post(`${config.serverUrl}/schedules`, scheduleData ,
      {
        headers:{
          Authorization:token
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error adding schedule:', error);
      throw error;
    }
  };