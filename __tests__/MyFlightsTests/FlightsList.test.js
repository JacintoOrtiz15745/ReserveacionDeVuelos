import React from 'react';
import {shallow} from 'enzyme';
import FlightsList from '../../src/components/atoms/MyFlightsAtoms/FlightsList';
const flights = [
  {
    id: '1',
    originCountry: 'BEG',
    destinyCountry: 'AMS',
    originCity: 'Serbia',
    destinyCity: 'Netherlands',
    date: 'September 3, 2021',
    passengers: 5,
  },
  {
    id: '2',
    originCountry: 'BEG',
    destinyCountry: 'AMS',
    originCity: 'dsfsf',
    destinyCity: 'fdgdg',
    date: 'September 3, 2021',
    passengers: 5,
  },
];
let wrapper;
beforeEach(() => {
  wrapper = shallow(<FlightsList flights={flights} />);
});

describe('renders corretly', () => {
  test('renders container on screen', () => {
    const component = wrapper.findWhere(
      (node) => node.prop('testID') === 'listContainer',
    );
    expect(component.exists()).toBeTruthy();
  });
  test('flastlist', () => {
    const flastList = wrapper.findWhere(
      (node) => node.prop('testID') === 'flightsList',
    );

    expect(flastList.exists()).toBeTruthy();
  });
  test('flatlist´s keyExtractor renders correctly', () => {
    const flastList = wrapper.findWhere(
      (node) => node.prop('testID') === 'flightsList',
    );
    const key = flastList.props().keyExtractor({id: '1'});
    expect(key).toBe('1');
  });
  test('flatlist´s render item', () => {
    const flastList = wrapper.findWhere(
      (node) => node.prop('testID') === 'flightsList',
    );
    const Item = flastList.props().renderItem({id: 1}).type({item: flights[0]});
    expect(Item.props.children.length).toBe(3);
  });
  
});
