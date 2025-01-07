// lib/axiosInstance.t

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', // Your base URL
  // baseURL: 'https://api.deventiatech.com', // Your base URL. 
  headers: {
    'Content-Type': 'application/json',
    // Add any custom headers if needed
  },
});

export default axiosInstance;
