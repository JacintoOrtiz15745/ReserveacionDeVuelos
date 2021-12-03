import React from 'react';
import GoogleSignUp from '../../src/components/atoms/SignUpAtoms/GoogleSignUp';
import {shallow} from 'enzyme';
import {SignUpConstants} from '../../src/utils/Constants';
import GoogleIcon from '../../src/assets/images/google.png';
import {connect} from 'react-redux';
import configureMockStore from 'redux-mock-store';

describe('renders correclty', () => {
  let wrapper;
  const mockStore = configureMockStore([]);
  let store;
  store = mockStore({});
  const ConnectedComponent = connect()(GoogleSignUp);

  wrapper = shallow(<ConnectedComponent store={store} />);
  const component = wrapper.dive().dive();
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('component exists', () => {
    const comp = component.findWhere(
      (node) => node.prop('testID') === 'GoogleSignUp',
    );
    expect(comp.exists()).toBeTruthy();
  });
  test('Icon img is displayed with the correct source', () => {
    const img = component.findWhere(
      (node) => node.prop('testID') === 'GoogleIcon',
    );
    expect(img.props().source).toEqual(GoogleIcon);
  });
  test('btn title renders correctly', () => {
    const btnTitle = component.findWhere(
      (node) => node.prop('testID') === 'btnTitle',
    );

    expect(btnTitle.props().children).toEqual(
      SignUpConstants.GoogleSignUpButton,
    );
  });
});
