import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import FlightsReducedr from './FlightsReducer';
const rootReducer = combineReducers({
  AuthReducer,
  FlightsReducedr,
});

export default rootReducer;
