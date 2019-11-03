export const selectedSpell = ( state = [], action) => {
  switch(action.type) {
    case 'SEARCHED_SPELL':
    return action.foundSpell;
    default:
      return state;
  }
}