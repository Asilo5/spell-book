export const nameOfWizard = (state = '', action) => {
    switch(action.type) {
        case 'NAME':
          return action.name;
        default:
          return state;
    }
}