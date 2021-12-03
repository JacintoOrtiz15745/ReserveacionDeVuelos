import React from 'react';
import {shallow} from 'enzyme';
import BookingGoBackIcon from '../../src/components/atoms/BookingAtoms/BookingGoBackIcon';

describe('Component renders correctly', () => {
  const props = {
    navigation: {navigate: jest.fn()},
    RouteToGo: 'some route',
  };
  const wrapper = shallow(<BookingGoBackIcon {...props} />);
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('component exists', () => {
    const component = wrapper.findWhere(
      (node) => node.prop('testID') === 'GoBackBtn',
    );
    expect(component.exists()).toBeTruthy();
  });
  test('navigate function gest called', () => {
    const component = wrapper.findWhere(
      (node) => node.prop('testID') === 'GoBackBtn',
    );
    component.props().onPress();
    wrapper.update();
    expect(props.navigation.navigate).toHaveBeenCalled();
  });
  test('icon exists', () => {
    const icon = wrapper.findWhere(
        (node) => node.prop('testID') === 'GoBackIcon',
      );
      expect(icon.exists()).toBeTruthy();
  });
});
