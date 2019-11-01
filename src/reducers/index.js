import { combineReducers } from 'redux';
import { userHouse } from './houseReducer';
import { isLoading } from './loadingReducer';
import { nameOfWizard } from './nameReducer';

const rootReducer = combineReducers({
    userHouse,
    isLoading,
    nameOfWizard
});

export default rootReducer;