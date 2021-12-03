import React from 'react';
import {shallow} from 'enzyme';
import BookingPicker from '../../src/components/atoms/BookingAtoms/BookingPicker';

describe('component renders correctly', () => {
  const props = {
    data: [
      {label: 'cool', value: 'cool'},
      {label: 'bad', value: 'bad'},
    ],
    selectedValue: 'isCool',
    setSelectedValue: jest.fn(),
  };
  //const wrapper = shallow(<BookingPicker {...props} />);

  test('component exists', () => {});
});
