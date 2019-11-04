import React from 'react';
import { FavouritesContainer, mapStateToProps } from './FavouritesContainer';
import { shallow } from 'enzyme';

describe('FavouritesContainer', () => {

    describe('favourites', () => {

       let mockFavouriteSpell = [
        { _id: '5b74f3653228320021ab628b',
        spell: 'Lumos',
        type: 'Spell',
        effect: 'creates light at wand tip',
        __v: 0 }
       ];

       let mockSpellBook = [
        { _id: '5b74f3583228320021ab628a',
        spell: 'Locomotor Mortis',
        type: 'Curse',
        effect: 'locks opponent\'s legs',
        __v: 0 },
      { _id: '5b74f3653228320021ab628b',
        spell: 'Lumos',
        type: 'Spell',
        effect: 'creates light at wand tip',
        __v: 0 } 
       ];

       let wrapper = shallow( <FavouritesContainer 
               favouriteSpells={mockFavouriteSpell}
                spellBook={mockSpellBook}
       /> )
       
      it('should match snapshot with all information passing in correctly', () => {
         expect(wrapper).toMatchSnapshot();
      })
    })

    describe('mapStateToProps', () => {
        it('should return a spellBook and favouriteSpell object', () => {
            const mockState = {
               "favouriteSpells": [   
                { _id: '5b74f3653228320021ab628b',
                   spell: 'Lumos',
                   type: 'Spell',
                   effect: 'creates light at wand tip',
                   __v: 0 }
                ],
               "spellBook": [
                  { _id: '5b74f3653228320021ab628b',
                  spell: 'Lumos',
                  type: 'Spell',
                  effect: 'creates light at wand tip',
                __v: 0 }
               ],
            }
            const expected = {
               "favouriteSpells": [
                { _id: '5b74f3653228320021ab628b',
                spell: 'Lumos',
                type: 'Spell',
                effect: 'creates light at wand tip',
                __v: 0 }
               ],
                "spellBook": [
                    { _id: '5b74f3653228320021ab628b',
                   spell: 'Lumos',
                   type: 'Spell',
                   effect: 'creates light at wand tip',
                   __v: 0 }
                ],
            }
            const mappedProps = mapStateToProps(mockState);
            expect(mappedProps).toEqual(expected);
          });
    })

})