import React from 'react';
import {shallow} from 'enzyme';
import BookingText from '../../src/components/atoms/BookingAtoms/BookingText';

describe('component renders correctly', () => {
  const props = {
    title: 'title',
    subtitle: 'subtitle',
  };
  const wrapper = shallow(<BookingText {...props} />);
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('component exists', () => {
    const component = wrapper.findWhere(
      (node) => node.prop('testID') === 'view',
    );
    expect(component.exists()).toBeTruthy();
  });
  test('component exists', () => {
    const title = wrapper.findWhere((node) => node.prop('testID') === 'title');
    expect(title.props().children).toEqual(props.title);
  });
  test('component exists', () => {
    const subtitle = wrapper.findWhere(
      (node) => node.prop('testID') === 'subtitle',
    );
    expect(subtitle.props().children).toEqual(props.subtitle);
  });
});
