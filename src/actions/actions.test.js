 import * as actions from './index';

 describe('action', () => {
    it('should have a type of GIVEN_HOUSE', () => {
        const house = 'Hufflepuff';
        const expectedAction = {
            type: 'GIVEN_HOUSE',
            house: 'Hufflepuff'
        };

        const result = actions.givenHouse(house);
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of IS_LOADING', () => {
        const bool = true;
        const expectedAction = {
          type: 'IS_LOADING',
          bool: true
        };

        const result = actions.isLoading(bool);
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of is NAME', () => {
        const name = 'Consuelo';
        const expectedAction = {
            type: 'NAME',
            name: 'Consuelo' 
        };

        const result = actions.wizardsName(name);
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of is HAS_ERROR', () => {
      const error = 'Error';
      const expectedAction = {
        type: 'HAS_ERROR',
        error: 'Error'
      };

      const result = actions.hasError(error);
      expect(result).toEqual(expectedAction);
    });

    it('should have a type of is HAS_SPELLS', () => {
      const spells = [
          {
            id: '11234',
            spell: 'Accio',
            describe: 'Gets whatever you want to get'
          }
      ];
      const expectedAction = {
        type: 'HAS_SPELLS',
        spells: [
            {
              id: '11234',
              spell: 'Accio',
              describe: 'Gets whatever you want to get'
            }
        ]
      }

      const result = actions.hasSpells(spells);
      expect(result).toEqual(expectedAction);
    })
 })