import axios from 'axios';
import { Storage } from '../utils';
import environment from '../config/environment';

const api = axios.create({
  baseURL: environment.api,
  timeout: 20000,
});

const requestHandler = async (request) => {
  const token = await Storage.getToken();
  request.headers['Access-Control-Allow-Origin'] = '*';
  if (token != null) request.headers['Authorization'] = 'Bearer ' + token.token;
  request.headers['Pragma'] = 'no cache ';
  request.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
  request.headers['Content-Type'] = 'application/json';
  return request;
};
api.interceptors.request.use((request) => requestHandler(request));

const errorResponseHandler = (error) => {
  // if has response show the error
  /* if (error.response) {
    if (error.response.status === 401) {
      showErrorToast('Usuário não autorizado!');
      persistedStore.store.dispatch(authLogoutAction());
    }
  } */
  throw JSON.parse(JSON.stringify(error));
};

api.interceptors.response.use((response) => response, errorResponseHandler);

export default api;
