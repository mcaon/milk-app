import {createActions, createReducer} from 'reduxsauce';

export const { Types, Creators } = createActions({
  forecastRequest: null,
  forecastSuccess: ['forecast'],
  setLatitude: ['latitude'],
  setLongitude: ['longitude'],
  setLastUpdate: ['lastUpdate'],
});

const INITIAL_STATE = {
  forecast: null,
  latitude: '',
  longitude: '',
  lastUpdate: '',
};

const forecastSuccess = (state = INITIAL_STATE, { forecast }) => {
  return {
    ...state,
    forecast: forecast
  };
};

const forecastRequest = (state = INITIAL_STATE) => {
  return {
    ...state
  };
};

const setLatitude = (state = INITIAL_STATE, {latitude}) => ({
  ...state,
  latitude
})

const setLongitude = (state = INITIAL_STATE, {longitude}) => ({
  ...state,
  longitude
})

const setLastUpdate = (state = INITIAL_STATE, {lastUpdate}) => ({
  ...state,
  lastUpdate
})

export default createReducer(INITIAL_STATE, {
  [Types.FORECAST_REQUEST]: forecastRequest,
  [Types.FORECAST_SUCCESS]: forecastSuccess,
  [Types.SET_LATITUDE]: setLatitude,
  [Types.SET_LONGITUDE]: setLongitude,
  [Types.SET_LAST_UPDATE]: setLastUpdate,
});
