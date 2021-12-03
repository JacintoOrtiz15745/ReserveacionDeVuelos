import React from 'react';
import {shallow} from 'enzyme';
import FlightsListItem from '../../src/components/atoms/MyFlightsAtoms/FlightsListItem';
const item = {
  id: '1',
  originCountry: 'BEG',
  destinyCountry: 'AMS',
  originCity: 'Serbia',
  destinyCity: 'Netherlands',
  date: 'September 3, 2021',
  passengers: 5,
};

const props = {
  item,
};

describe('Render correctly', () => {
  const wrapper = shallow(<FlightsListItem {...props} />);
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Render correctly', () => {
    const render = wrapper.findWhere((node) => node.prop('testID') === 'view');
    expect(render.exists()).toBeTruthy();
  });
  test('Render correctly', () => {
    const render = wrapper.findWhere((node) => node.prop('testID') === 'view');
    expect(render.props().children.length).toBe(3);
  });
  
});
