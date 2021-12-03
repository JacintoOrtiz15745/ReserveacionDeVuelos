import React from 'react';
import {shallow} from 'enzyme';
import BookingButton from '../../src/components/atoms/BookingAtoms/BookingButton';
import {BookingConstants} from '../../src/utils/Constants';
describe('Booking Button render correctly', () => {
  const props = {
    navigation: {navigate: jest.fn()},
    RouteToGo: 'route',
    selectedValue: 'some value',
    values: {val1: '1', val2: '2'},
    date: false,
  };
  const wrapper = shallow(<BookingButton {...props} />);
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('component exists', () => {
    const component = wrapper.findWhere(
      (node) => node.prop('testID') === 'BookingBtn',
    );
    expect(component.exists()).toBeTruthy();
  });
  test('title matches with our constant', () => {
    const title = wrapper.findWhere(
      (node) => node.prop('testID') === 'BookingBtnTitle',
    );
    expect(title.props().children).toEqual(BookingConstants.BtnText);
  });
  test('navigation function gets called as expected', () => {
    const btn = wrapper.findWhere(
      (node) => node.prop('testID') === 'BookingBtn',
    );
    btn.props().onPress();
    wrapper.update();
    expect(props.navigation.navigate).toHaveBeenCalled();
  });
});
