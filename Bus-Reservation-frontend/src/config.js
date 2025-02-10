export const config = {
  serverUrl: 'http://localhost:8080',
}

import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: config.serverUrl, // Backend URL
});

// Add interceptor to include token in every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // config.headers.Authorization = `Bearer ${token}`;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
