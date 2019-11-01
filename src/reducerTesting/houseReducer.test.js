import { userHouse } from '../reducers/houseReducer';

describe('userHouse', () => {
    it('should return initial state', () => {
       const expected = '';

       const result = userHouse(undefined, '');
       expect(result).toEqual(expected);
    })
})