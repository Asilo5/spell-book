import { combineReducers } from 'redux';
import { userHouse } from './houseReducer';
import { isLoading } from './loadingReducer';
import { nameOfWizard } from './nameReducer';
import { errorMsg } from './errorReducer';
import { spellBook } from './spellsReducer';

const rootReducer = combineReducers({
    userHouse,
    isLoading,
    nameOfWizard,
    errorMsg,
    spellBook
});

export default rootReducer;