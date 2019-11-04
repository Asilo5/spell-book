import React from 'react';
import { shallow } from 'enzyme';
import { HouseForm, mapDispatchToProps } from './HouseForm';
import { givenHouse, isLoading, wizardsName, hasSpells, searchedSpell } from '../../actions';
import { getHouses, getSpells } from '../../apiCalls';

jest.mock('../../apiCalls');

describe('HouseForm', () => {
    describe('Form', () => {
       
        let wrapper;
        let mockName = 'Bob Potter';
        let mockHouse = 'Hufflepuff';
        let mockLoading = true;
        let mockSpells = [
            { _id: '5b74ebd5fb6fc0739646754c',
               spell: 'Aberto',
               type: 'Charm',
               effect: 'opens objects' }];

        beforeEach(() => {
          
            wrapper = shallow( <HouseForm 
               givenHouse={mockHouse}
               isLoading={mockLoading}
               wizardsName={mockName}
               hasSpells={mockSpells}
               searchedSpell={mockSpells} />);

            getHouses.mockImplementation(() => {
                return Promise.resolve(mockHouse);
            });

            getSpells.mockImplementation(() => {
                return Promise.resolve(mockSpells);
            })
        })

        it('should match snapshot with all information passing through', () => {
            expect(wrapper).toMatchSnapshot();
        })

        it('should update local state of name when handleChange is invoked', () => {
            const mockEvent = {
                target: {
                  name: 'name',
                  value: 'Bob Potter'
                }
            }

            const expected = 'Bob Potter';

            wrapper.instance().handleChange(mockEvent);
            expect(wrapper.state('name')).toEqual(expected);
        })

        it.skip('should invoke findHouse when link is clicked', () => {
            wrapper.instance().foundHouse = jest.fn();

            wrapper.find('Link').simulate('click');
            expect(wrapper.instance().foundHouse).toHaveBeenCalled();
        })

        it('should call getHouse fetch when foundHouse is called', () => {
            wrapper.instance().foundHouse();
            expect(getHouses).toHaveBeenCalled();
        })

        it('should call getSpells when foundSpells is called', () => {
            wrapper.instance().foundSpells();
            expect(getSpells).toHaveBeenCalledWith();
        })
    })

    describe('mapDispatchToProps', () => {
        
            let mockName = 'Bob Potter';
            let mockHouse = 'Hufflepuff';
            let mockLoading = true;
            let mockSpells = [
                { _id: '5b74ebd5fb6fc0739646754c',
                   spell: 'Aberto',
                   type: 'Charm',
                   effect: 'opens objects' 
                }];
            const mockDispatch = jest.fn()
       it('should dispatch givenHouse when foundHouse is called', () => {
           const actionToDispatch = givenHouse(mockHouse);
           const mappedProps = mapDispatchToProps(mockDispatch);

           mappedProps.givenHouse(mockHouse);
           expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
       })

       it('should dispatch wizardsName when foundHouse is called', () => {
          const actionToDispatch = wizardsName(mockName);
          const mappedProps = mapDispatchToProps(mockDispatch);

          mappedProps.wizardsName(mockName);
          expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
       })

       it('should dispatch hasSpells when foundSpells is called', () => {
           
       })
    })
})