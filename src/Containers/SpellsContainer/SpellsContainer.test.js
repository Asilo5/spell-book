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
        it('should return an array with the spells state', () => {
          const mockState = {
            "selectedSpell": [
               { _id: '5b74f3653228320021ab628b',
               spell: 'Lumos',
               type: 'Spell',
               effect: 'creates light at wand tip',
             __v: 0 }
            ],
         }
         const expected = {
             "selectedSpell": [
                 { _id: '5b74f3653228320021ab628b',
                spell: 'Lumos',
                type: 'Spell',
                effect: 'creates light at wand tip',
                __v: 0 }
             ],
         }
         const mappedProps = mapStateToProps(mockState);
         expect(mappedProps).toEqual(expected);
        })
    })
})
