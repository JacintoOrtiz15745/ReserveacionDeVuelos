import React from 'react';
import SignUpButton from '../../src/components/atoms/SignUpAtoms/SignUpButton';
import {shallow} from 'enzyme';
import {SignUpConstants} from '../../src/utils/Constants';
import {colors} from '../../src/styles/Colors';
import {connect} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('SignUpButton component renders as expected', () => {
  const mockStore = configureMockStore([]);
  let store;
  store = mockStore({});
  const ConnectedComponent = connect()(SignUpButton);
  const wrapper = shallow(<ConnectedComponent store={store} />);
  const component = wrapper.dive().dive();
  test('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('button exists', () => {
    const btn = component.findWhere(
      (node) => node.prop('testID') === 'SignUpBtn',
    );
    expect(btn.length).toBe(1);
  });
  test('button contains a title', () => {
    const btnTitle = component.findWhere(
      (node) => node.prop('testID') === 'btnTitle',
    );
    expect(btnTitle.length).toBe(1);
  });
  test('button title matches with our constant', () => {
    const btnTitle = component.findWhere(
      (node) => node.prop('testID') === 'btnTitle',
    );
    expect(btnTitle.props().children).toBe(SignUpConstants.SignUpButton);
  });
});

describe('Funcionality when is not enabled', () => {
  const mockStore = configureMockStore([]);
  let store;
  store = mockStore({});
  const mockFormValues = {
    name: '',
    email: '',
    password: '',
    termsCheckbox: false,
    updatesCheckbox: false,
    validName: false,
    validEmail: false,
    validPassword: false,
    validatedName: false,
    validatedEmail: false,
    validatedPassword: false,
  };
  const signUpSubmitMock = jest.fn();
  const ConnectedComponent = connect()(SignUpButton);
  const wrapper = shallow(
    <ConnectedComponent
      store={store}
      isButtonEnabled={false}
      formValues={mockFormValues}
      signUpSubmit={signUpSubmitMock}
    />,
  );
  const component = wrapper.dive().dive();

  test('buttton color matches with our color constant', () => {
    const btn = component.findWhere(
      (node) => node.prop('testID') === 'SignUpBtn',
    );
    expect(btn.props().style[1].backgroundColor).toEqual(colors.ligthGray);
  });
  test('submit function is not called', () => {
    const btn = component.findWhere(
      (node) => node.prop('testID') === 'SignUpBtn',
    );
    btn.props().onPress();
    component.update();
    expect(signUpSubmitMock).not.toHaveBeenCalled();
  });
});

describe('Funcionality when is enabled', () => {
  const mockStore = configureMockStore([thunk]);
  let store;
  store = mockStore({
    dispatch: jest.fn(),
  });
  const mockFormValues = {
    name: 'juan',
    email: 'juan@mail.com',
    password: 'mm23mm222',
    termsCheckbox: true,
    updatesCheckbox: true,
    validName: true,
    validEmail: true,
    validPassword: true,
    validatedName: true,
    validatedEmail: true,
    validatedPassword: true,
  };

  const ConnectedComponent = connect()(SignUpButton);
  const wrapper = shallow(
    <ConnectedComponent
      store={store}
      isButtonEnabled={true}
      formValues={mockFormValues}
    />,
  );
  const component = wrapper.dive().dive();

  test('buttton color matches with our color constant', () => {
    const btn = component.findWhere(
      (node) => node.prop('testID') === 'SignUpBtn',
    );
    expect(btn.props().style[1].backgroundColor).toEqual(colors.Purple);
  });
});
