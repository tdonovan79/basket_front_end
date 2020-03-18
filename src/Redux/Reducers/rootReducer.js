import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';
import checkReducer from './checkReducer';
import currentCheckReducer from './currentCheckReducer'


const state = {
    employee: employeeReducer,
    currentCheck: currentCheckReducer,
    checks: checkReducer
};

export default combineReducers(state);