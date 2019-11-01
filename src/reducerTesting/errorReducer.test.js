import { errorMsg } from '../reducers/errorReducer';

describe('errorMsg', () => {
    it('should return default state', () => {
      const expected = '';
      const result = errorMsg(undefined, '');

      expect(result).toEqual(expected);
    })
})