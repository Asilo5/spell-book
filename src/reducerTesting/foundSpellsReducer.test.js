import { selectedSpell } from '../reducers/foundSpellReducer';

describe('selectedSpell', () => {
    it('should return initial state', () => {
      const expected = [];

      const result = selectedSpell(undefined, []);
      expect(result).toEqual(expected);
    })

    it('should updated state with spell', () => {
      const action = {
        type: 'SEARCHED_SPELL',
        foundSpell: [{
            id: '2424',
            spell: 'Alohomora'
        }]
      }

      const expected = [{
        id: '2424',
        spell: 'Alohomora'
      }];

      const result = selectedSpell(undefined, action);
      expect(result).toEqual(expected);
    })
})