import React from 'react';
import SignUpForm from '../../src/components/molecules/SignUpMolecules/SignUpForm';
import {shallow} from 'enzyme';


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
  formValues,
  setFormValues: jest.fn(),
};
let wrapper;
beforeEach(() => {
  wrapper = shallow(<SignUpForm {...props} />);
});
describe('renders correclty', () => {
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Titles match with the num of inputs', () => {
    const component = wrapper.findWhere(
      (node) => node.prop('testID') === 'signUpForm',
    );

    expect(component.exists()).toBeTruthy();
  });
});
