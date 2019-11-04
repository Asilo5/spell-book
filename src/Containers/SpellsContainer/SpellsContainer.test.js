import React from 'react';
import { shallow } from 'enzyme';
import { SpellsContainer, mapStateToProps } from './SpellsContainer';

describe('SpellsContainer', () => {

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
