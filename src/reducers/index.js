import { combineReducers } from 'redux';
import { userHouse } from './houseReducer';

const rootReducer = combineReducers({
    userHouse
});

export default rootReducer;