import { combineReducers } from 'redux';
import { userHouse } from './houseReducer';
import { isLoading } from './loadingReducer';
import { nameOfWizard } from './nameReducer';
import { errorMsg } from './errorReducer';

const rootReducer = combineReducers({
    userHouse,
    isLoading,
    nameOfWizard,
    errorMsg
});

export default rootReducer;