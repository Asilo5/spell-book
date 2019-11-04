import { favouriteSpells } from '../reducers/favouritesReducer';

describe('favouriteSpells', () => {
    it('should return initial state', () => {
        const expected = [];

        const result = favouriteSpells(undefined, []);
        expect(result).toEqual(expected);
    })

    it('should return a favourited spell id as state if its added', () => {
       const action = {
           type: 'ADD_FAVOURITE',
           id: '24234'
       }

       const expected = ['24234'];
       const result = favouriteSpells(undefined, action);
       expect(result).toEqual(expected);
    })

    it.skip('should return updated state when deleting favourite', () => {
        const action = {
          type: 'DELETE_FAVOURITE',
          id: '24234'
        }
        
        const initial = ['2323', '43423', '24234']
        const expected = ['2323', '43423'];
        const result = favouriteSpells(initial, action);
        expect(result).toEqual(expected);
    })
})