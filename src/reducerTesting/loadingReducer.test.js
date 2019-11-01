import { isLoading } from '../reducers/loadingReducer';

describe('isLoading', () => {
    it('should return initial state', () => {
      const expected = false;

      const result = isLoading(undefined, false);
      expect(result).toEqual(expected);
    })

    it('should return state of true', () => {
      const action = {
        type: 'IS_LOADING',
        bool: true
      }
      const expected = true;

      const result = isLoading(undefined, action);
      expect(result).toEqual(expected);
    })
})