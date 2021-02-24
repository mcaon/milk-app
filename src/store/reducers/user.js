import {createActions, createReducer} from 'reduxsauce';

export const { Types, Creators } = createActions({
  setConnected: ['connected'],
});

const INITIAL_STATE = {
  connected: true
};

const setConnected = (state = INITIAL_STATE, {connected}) => ({
  ...state,
  connected
})

export default createReducer(INITIAL_STATE, {
  [Types.SET_CONNECTED]: setConnected
});
