import { errorMsg } from '../reducers/errorReducer';

describe('errorMsg', () => {
    it('should return default state', () => {
      const expected = '';
      const result = errorMsg(undefined, '');

      expect(result).toEqual(expected);
    });

    it('should return error message', () => {
      const action = {
          type: 'HAS_ERROR',
          error: 'This is an error' 
      }

      const expected = 'This is an error';
      const result = errorMsg(undefined, action);

      expect(result).toEqual(expected);
    })
})