import { spellBook } from '../reducers/spellsReducer';

describe('spellBook', () => {
  it('should return initial state', () => {
      const expected = [];
      const result = spellBook(undefined, []);

      expect(result).toEqual(expected);
  });

  it('should return an array of spells as new state', () => {
      const action = {
          type:'HAS_SPELLS', 
          spells:[
          {
            _id: '3535345433',
            spell: 'Legilimens',
            type: 'Spell',
            effect: 'allows caster to read the mind of the target' 
          }
        ]
      };
      const expected = [
        {
          _id: '3535345433',
          spell: 'Legilimens',
          type: 'Spell',
          effect: 'allows caster to read the mind of the target' 
        }
      ];
      const result = spellBook(undefined, action);
      expect(result).toEqual(expected);

  })
})