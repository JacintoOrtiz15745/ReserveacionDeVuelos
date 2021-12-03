import React from 'react';
import SignUpTitle from '../../src/components/atoms/SignUpAtoms/SignUpTitle';
import {shallow} from 'enzyme';
import { SignUpConstants } from "../../src/utils/Constants";
let wrapper;
beforeEach(() => {
  wrapper = shallow(<SignUpTitle />);
});
describe('SignUpTitle component renders as expected', () => {
  test('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Title renders correclty', () => {
    const title = wrapper.findWhere(
      (node) => node.prop('testID') === 'signUpTitle',
    );
    expect(title.length).toBe(1);
  });
  test('Title string matches with our constant', () => {
    const title = wrapper.findWhere(
      (node) => node.prop('testID') === 'signUpTitle',
    );
    expect(title.props().children).toBe(SignUpConstants.SignUpTitle);
  });
});
