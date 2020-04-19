import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';


const store = createStore(rootReducer,   compose(applyMiddleware(thunk)));
export default store

