import React from 'react';
import SignUpFormCheckBox from '../../src/components/atoms/SignUpAtoms/SignUpFormCheckBox';
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
  checkboxMessage: SignUpFormCheckBox.checkboxMessage,
  checkBoxValue: false,
  formValues,
  setFormValues: jest.fn(),
  handleChange: jest.fn(),
};

describe('Reders conrreclty', () => {
  const wrapper = shallow(<SignUpFormCheckBox {...props} />);
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Render correctly', () => {
    const render = wrapper.findWhere((node) => node.prop('testID') === 'view');
    expect(render.exists()).toBeTruthy();
  });
  test('Render only one checkbox', () => {
    const render = wrapper.findWhere(
      (node) => node.prop('testID') === 'checkBox',
    );
    expect(render.length).toBe(1);
  });
  test('Render by default checkbox on false', () => {
    const value = wrapper.findWhere(
      (node) => node.prop('testID') === 'checkBox',
    );

    expect(value.props().value).toBe(false);
  });
  test('Render correctly the event onValueChange', () => {
    const event = wrapper.findWhere(
      (node) => node.prop('testID') === 'checkBox',
    );
    event.props().onValueChange();
    wrapper.update();
    expect(props.handleChange).toHaveBeenCalled();
  });
});
