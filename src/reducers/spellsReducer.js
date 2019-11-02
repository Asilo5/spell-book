export const spellBook = ( state = [], action ) => {
  switch(action.type) {
    case 'HAS_SPELLS':
      return [...state, action.spells];
    default:
      return state;
  }
}