import {combineReducers} from 'redux';
import example from './example';
import weather from './weather';

export default combineReducers({
  example,
  weather
});
