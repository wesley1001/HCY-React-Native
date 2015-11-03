import { combineReducers } from 'redux';
import { splash } from './splash.js';
import { conditions, finishedCondition, currentCondition } from './analysis.js';


export default combineReducers({
  splash,
  conditions,
  finishedCondition,
  currentCondition
});