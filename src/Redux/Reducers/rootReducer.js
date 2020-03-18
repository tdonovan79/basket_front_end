import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';
import checkReducer from './checkReducer';
import currentCheckReducer from './currentCheckReducer'
import productReducer from './productReducer'


const state = {
    employee: employeeReducer,
    currentCheck: currentCheckReducer,
    checks: checkReducer,
    products: productReducer
};

export default combineReducers(state);