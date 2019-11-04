import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, mapStateToProps } from './NavBar';

describe('NavBar', () => {
    describe('Nav', () => {
      let mockHouse = 'Hufflepuff';
      let mockName = 'Bob Potter';

      let wrapper = shallow(<NavBar 
         userHouse={mockHouse}
         nameOfWizard={mockName}
      />)

      it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
      })
    })

    describe('mapStateToProps', () => {
       it('should return userHouse state', () => {
           const mockState = {
            "userHouse": 'HufflePuff',
            "nameOfWizard": 'Consuelo Weasley'
           };
           
           const expected = {
             "userHouse": 'HufflePuff',
             "nameOfWizard": 'Consuelo Weasley'
           };

           const mappedProps = mapStateToProps(mockState);
           expect(mappedProps).toEqual(expected);
       })
    })
})