import { combineReducers } from "redux";
import betReducer from './betReducer';
import moneyReducer from './moneyReducer';

export default combineReducers({
    money: moneyReducer,
    bet: betReducer
});