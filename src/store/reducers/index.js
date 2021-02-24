import {combineReducers} from 'redux';
import example from './example';
import weather from './weather';
import user from './user';

export default combineReducers({
  example,
  weather,
  user
});
