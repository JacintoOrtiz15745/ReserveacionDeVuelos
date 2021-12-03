import React from 'react';
import SignUpButtons from '../../src/components/atoms/SignUpAtoms/SignUpButtons';
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
const validationValues = {
  terms: formValues.termsCheckbox,
  updates: formValues.updatesCheckbox,
  validatedName: formValues.validatedName,
  validatedEmail: formValues.validatedEmail,
  validatedPassword: formValues.validatedPassword,
};
const validateInputsMock = jest.fn();
describe('renders correctly', () => {
  const wrapper = shallow(
    <SignUpButtons
      validationValues={validationValues}
      formValues={formValues}
      validateInputs={validateInputsMock}
    />,
  );
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('renders correctly', () => {
    const render = wrapper.findWhere((node) => node.prop('testID') === 'view');
    expect(render.exists()).toBeTruthy();
  });
  test('validate input func to have been called on mounted', () => {
    validateInputsMock();
    expect(validateInputsMock).toHaveBeenCalled();
  });
});
