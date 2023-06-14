import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use(config => {
  config.headers['Authorization'] = `Bearer ${process.env.API_KEY}`;
  return config;
});

export default api;
