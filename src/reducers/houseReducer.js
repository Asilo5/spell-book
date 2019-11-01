export const userHouse = (state = '', action) => {
    switch(action.type) {
        case 'GIVEN_HOUSE':
          return action.house;
        default:
          return state;
    }
}