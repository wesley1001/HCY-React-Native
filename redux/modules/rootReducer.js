import { combineReducers } from 'redux';
import { splash } from './splash.js';
import { conditions } from './analysis.js';


export default combineReducers({
  splash,
  conditions
});