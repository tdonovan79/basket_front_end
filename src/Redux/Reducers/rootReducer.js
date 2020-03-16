import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';


const state = {
    employee: employeeReducer
};

export default combineReducers(state);