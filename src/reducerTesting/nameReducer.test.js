import { nameOfWizard } from '../reducers/nameReducer';

describe('nameOfWizard', () => {
   it('should return initial state', () => {
     const expected = '';
     const result = nameOfWizard(undefined, '');

     expect(result).toEqual(expected);
   });

   it('should return state of name of wizard', () => {
     const action = {
       type: 'NAME',
       name: 'Consuelo'
     };
     const expected = 'Consuelo';

     const result = nameOfWizard(undefined, action);
     expect(result).toEqual(expected);
   })
})