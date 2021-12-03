import React from 'react';
import {shallow} from 'enzyme';
import BookingScrollPicker from '../../src/components/atoms/BookingAtoms/BookingScrollPicker';
import {BookingConstants} from '../../src/utils/Constants';

describe('component renders correctly', () => {
  const wrapper = shallow(<BookingScrollPicker />);
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('component exists', () => {
    const component = wrapper.findWhere(
      (node) => node.prop('testID') === 'container',
    );
    expect(component.exists()).toBeTruthy();
  });
  test('icon renders', () => {
    const icon = wrapper.findWhere((node) => node.prop('testID') === 'icon');
    expect(icon.exists()).toBeTruthy();
  });
  test('icons render as expected', () => {
    const icon = wrapper.findWhere((node) => node.prop('testID') === 'icon');
    expect(icon.length).toBe(2);
  });
  test('flatlist renders', () => {
    const list = wrapper.findWhere((node) => node.prop('testID') === 'list');
    expect(list.exists()).toBeTruthy();
  });
});
