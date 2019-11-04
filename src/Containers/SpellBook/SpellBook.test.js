import React from 'react';
import { shallow } from 'enzyme';
import { SpellBook, mapStateToProps, mapDispatchToProps } from './SpellBook';

describe('SpellBook', () => {
 
    describe('Spells', () => {
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

        let wrapper = shallow(<SpellBook 
            userHouse='Hufflepuff'
            nameOfWizard='Consuelo'
            selectedSpell='Alohomora'
            spellBook={mockFavouriteSpell}
            favouriteSpells={mockSpellBook}
            addFavourite='2343'
            deleteFavourite='3443'
         />)

         it('should match snapshot with all information passing in correctly', () => {
             expect(wrapper).toMatchSnapshot();
         })
    })

    describe('mapStateToProps', () => {
        it('should return all state with their properties', () => {
            const mockState = {
                "userHouse": 'Hufflepuff',
                "nameOfWizard": 'Consuelo Weasley',
                "selectedSpell": 'Alohomora',
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
                "userHouse": 'Hufflepuff',
                "nameOfWizard": 'Consuelo Weasley',
                "selectedSpell": 'Alohomora',
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
        })
    })

    describe('mapDispatchToProps', () => {
        
    })

})