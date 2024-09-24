import axios from "axios";

// Axios instance
const API = axios.create({
  baseURL: process.env.REACT_APP_DUMMY_DATA_BASE_URL,
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en-US,en;q=0.9",
  },
});

// Interceptor for when a request is being made with this axios
API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor for when a response is received
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { API };
