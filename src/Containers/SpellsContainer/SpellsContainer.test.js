import React from 'react';
import { shallow } from 'enzyme';
import { SpellsContainer, mapStateToProps } from './SpellsContainer';

describe('SpellsContainer', () => {

    describe('Spells', () => {
        let wrapper;
        let mockSpells = [
            {
              id: '43453',
              spell: 'Crucio',
              type: 'curse'
            }
        ]
        beforeEach(() => {
          wrapper = shallow(<SpellsContainer 
              selectedSpell={mockSpells}
             />)
        })
    
        it('should match snapshot with all data being passed in correctly', () => {
          expect(wrapper).toMatchSnapshot();
        })
    })


    describe('mapStateToProps', () => {
        it.skip('should return an array with the spells state', () => {
            const mockState = {
                foundSpell: [
                    { _id: '5b74f38b3228320021ab628d',
                    spell: 'Lumos Solem',
                    type: 'Spell',
                    effect: 'creates a strong beam of light from the wand',
                    __v: 0 }
                   ],
                  filter: 'SEARCHED_SPELL'
              };

              const expected = {
                foundSpell: [
                    { _id: '5b74f38b3228320021ab628d',
                    spell: 'Lumos Solem',
                    type: 'Spell',
                    effect: 'creates a strong beam of light from the wand',
                    __v: 0 }
                  ]
              };

            const mappedProps = mapStateToProps(mockState);
            expect(mappedProps).toEqual(expected);

        })
    })
})
