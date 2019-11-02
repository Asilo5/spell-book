import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should match snapshot with correct data passing through', () => {
    let wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })
})
 