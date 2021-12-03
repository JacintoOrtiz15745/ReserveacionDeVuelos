import React from 'react';
import {shallow} from 'enzyme';
import BookingTitle from '../../src/components/atoms/BookingAtoms/BookingTitle';

describe('component renders correctly', () => {
  const props = {
    title: 'some text',
  };
  const wrapper = shallow(<BookingTitle {...props} />);
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('text matches with prop', () => {});
  const title = wrapper.findWhere((node) => node.prop('testID') === 'title');
  expect(title.props().children).toEqual(props.title);
});
