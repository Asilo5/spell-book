export const favouriteSpells = ( state = [], action ) => {
    switch(action.type) {
        case 'ADD_FAVOURITE':
          return [...state, action.id];
        case 'DELETE_FAVOURITE':
          return state.filter((id) => id !== action.id);
        default:
          return state;
    }  
}