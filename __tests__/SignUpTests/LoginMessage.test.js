import React from 'react';
import LoginMessage from '../../src/components/atoms/SignUpAtoms/LoginMessage';
import {shallow} from 'enzyme';
import {SignUpConstants} from '../../src/utils/Constants';

const formValues = {
  name: '',
  email: '',
  password: '',
  termsCheckbox: false,
  updatesCheckbox: false,
  validName: true,
  validEmail: true,
  validPassword: true,
  validatedName: false,
  validatedEmail: false,
  validatedPassword: false,
};

const props = {
  HasAnAccount: SignUpConstants.HasAnAccount,
  LogIn: SignUpConstants.LogIn,
  formValues,
};

describe('render correctly', () => {
  const wrapper = shallow(<LoginMessage {...props} />);
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Render correctly', () => {
    const render = wrapper.findWhere((node) => node.prop('testID') === 'view');
    expect(render.exists()).toBeTruthy();
  });
  test('Render correctly', () => {
    const render = wrapper.findWhere(
      (node) => node.prop('testID') === 'account',
    );
    expect(render.props().children).toEqual(SignUpConstants.HasAnAccount);
  });
  test('Render correctly', () => {
    const render = wrapper.findWhere(
      (node) => node.prop('testID') === 'logIn',
    );
    expect(render.props().children).toEqual(SignUpConstants.LogIn);
  });
});
