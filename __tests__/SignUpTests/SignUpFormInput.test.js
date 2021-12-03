import React from 'react';
import SignUpFormInput from '../../src/components/atoms/SignUpAtoms/SignUpFormInput';
import {shallow} from 'enzyme';
import {SignUpConstants} from '../../src/utils/Constants';

let wrapper;
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
  inputName: SignUpConstants.NameInputTitle,
  value: '',
  validation: true,
  errorMessage: SignUpConstants.nameErrorMessage,
  setFormValues: jest.fn(),
  handleChange: jest.fn(),
  formValues,
  isValidated: false,
};
beforeEach(() => {
  wrapper = shallow(<SignUpFormInput {...props} />);
});
describe('renders correclty when inputName is "name"', () => {
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('renders Input Title', () => {
    const InputTitle = wrapper.findWhere(
      (node) => node.prop('testID') === 'inputTitle',
    );
    expect(InputTitle.length).toBe(1);
  });
  test('renders Title string correctly', () => {
    const InputTitle = wrapper.findWhere(
      (node) => node.prop('testID') === 'inputTitle',
    );

    expect(InputTitle.props().children[0]).toEqual(props.inputName);
  });
  test('password bottom text does not show when inputName is "name"', () => {
    const passwordMsg = wrapper.findWhere(
      (node) => node.prop('testID') === 'passwordMsg',
    );
    expect(passwordMsg.length).toBe(0);
  });
  test('TextInput handle change works as expected', () => {
    const textInput = wrapper.findWhere(
      (node) => node.prop('testID') === 'input',
    );
    textInput.props().onChangeText();
    wrapper.update();
    expect(props.handleChange).toHaveBeenCalled();
  });
});

describe('renders correclty when inputName is "email"', () => {
  const props = {
    inputName: SignUpConstants.EmailInputTitle,
    value: '',
    validation: true,
    errorMessage: SignUpConstants.emailErrorMessage,
    setFormValues: jest.fn(),
    handleChange: jest.fn(),
    formValues,
    isValidated: false,
  };
  const wrapper = shallow(<SignUpFormInput {...props} />);
  test('renders Title string correctly', () => {
    const InputTitle = wrapper.findWhere(
      (node) => node.prop('testID') === 'inputTitle',
    );

    expect(InputTitle.props().children[0]).toEqual(props.inputName);
  });
  test('password bottom text does not show when inputName is "email"', () => {
    const passwordMsg = wrapper.findWhere(
      (node) => node.prop('testID') === 'passwordMsg',
    );
    expect(passwordMsg.exists()).not.toBeTruthy();
  });
});

describe('renders correclty when inputName is "password"', () => {
  const props = {
    inputName: SignUpConstants.PasswordInputTitle,
    value: '',
    validation: true,
    errorMessage: SignUpConstants.passwordErrorMessage,
    setFormValues: jest.fn(),
    handleChange: jest.fn(),
    formValues,
    isValidated: false,
  };
  const wrapper = shallow(<SignUpFormInput {...props} />);
  test('renders Title string correctly', () => {
    const InputName = wrapper.findWhere(
      (node) => node.prop('testID') === 'inputTitle',
    );
    expect(InputName.props().children[0]).toEqual(props.inputName);
  });
  test('render bottom text when inputname is password', () => {
    const passworMsg = wrapper.findWhere(
      (node) => node.prop('testID') === 'passwordMsg',
    );
    expect(passworMsg.exists()).toBeTruthy();
  });

  test('renders Title string correctly in password Message', () => {
    const passworMsg = wrapper.findWhere(
      (node) => node.prop('testID') === 'passwordMsg',
    );

    expect(passworMsg.props().children).toEqual(
      SignUpConstants.CharactersMessage,
    );
  });
});
