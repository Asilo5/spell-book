import { combineReducers } from 'redux';
import { userHouse } from './houseReducer';
import { isLoading } from './loadingReducer';
import { nameOfWizard } from './nameReducer';
import { errorMsg } from './errorReducer';
import { spellBook } from './spellsReducer';
import { selectedSpell } from './foundSpellReducer';
import { favouriteSpells } from './favouritesReducer';

const rootReducer = combineReducers({
    userHouse,
    isLoading,
    nameOfWizard,
    errorMsg,
    spellBook,
    selectedSpell,
    favouriteSpells
});

export default rootReducer;