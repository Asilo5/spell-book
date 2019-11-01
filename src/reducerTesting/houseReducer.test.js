import { userHouse } from '../reducers/houseReducer';

describe('userHouse', () => {
    it('should return initial state', () => {
       const expected = '';

       const result = userHouse(undefined, '');
       expect(result).toEqual(expected);
    }); 

    it('should return house as state', () => {
        const action = {
            type: 'GIVEN_HOUSE',
            house: 'Hufflepuff'
        }
        const expected = 'Hufflepuff';
        
        const result = userHouse(undefined, action);
        expect(result).toEqual(expected);
    })
})