import React from 'react';
import SignUp from '../../src/screens/SignUp';
import {shallow} from 'enzyme';
let wrapper;
beforeEach(() => {
  wrapper = shallow(<SignUp />);
});
describe('renders correctly', () => {
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('renders component', () => {
    const component = wrapper.findWhere(
      (node) => node.prop('testID') === 'SignUpScreen',
    );
    expect(component.exists()).toBeTruthy();
  });
});
