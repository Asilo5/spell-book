import React from 'react';
import { shallow } from 'enzyme';
import { SpellBook, mapStateToProps, mapDispatchToProps } from './SpellBook';
import { addFavourite, deleteFavourite } from '../../actions';


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

         it.skip('should call toggleFavourite when img is clicked', () => {
             const toggleFavouriteMock = jest.fn();
            
             wrapper.find('.favourite-wand').simulate('click');

             expect(toggleFavouriteMock).toHaveBeenCalled();
         })

         // add fix click test and add update state tests
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
        it('calls dispatch with an addFavourite action when toggleFavourite is called', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = addFavourite('77478');

            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.addFavourite('77478')

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
          });

          it('calls dispatch with an deleteFavourite action when toggleFavourite is called', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = deleteFavourite('d4545');
            const mappedProps = mapDispatchToProps(mockDispatch);

            mappedProps.deleteFavourite('d4545')
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
          });
    })

})