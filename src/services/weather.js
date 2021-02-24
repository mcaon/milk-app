import api from './api';
import environment from '../config/environment';

const getForecastByCityCoordinates = ({lat, lon, user_ip}) => {
  return api
    .get(`weather`, {
      params: {
        lat,
        lon,
        user_ip,
        key: environment.key
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export {getForecastByCityCoordinates};
