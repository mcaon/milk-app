import axios from 'axios';
import environment from '../config/environment';

const api = axios.create({
  baseURL: environment.api,
  timeout: 20000,
});

const requestHandler = async (request) => {
  request.headers['Access-Control-Allow-Origin'] = '*';
  request.headers['Pragma'] = 'no cache ';
  request.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
  request.headers['Content-Type'] = 'application/json';
  return request;
};
api.interceptors.request.use((request) => requestHandler(request));

export default api;
