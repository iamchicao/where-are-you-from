import { combineReducers } from 'redux';
import countries from './countries';
import details from './details';

export default combineReducers({
  countries,
  details,
});
