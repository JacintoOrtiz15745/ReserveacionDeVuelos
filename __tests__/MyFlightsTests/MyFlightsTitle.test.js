import React from 'react';
import {shallow} from 'enzyme';
import MyFlightsTitle from '../../src/components/atoms/MyFlightsAtoms/MyFlightsTitle';
import {connect} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const props = {
  title: 'title',
};

describe('Render correctly', () => {
  const mockStore = configureMockStore([]);
  let store = mockStore({});
  const ConnectedComponent = connect()(MyFlightsTitle);
  const wrapper = shallow(<ConnectedComponent {...props} store={store} />);
  const component = wrapper.dive().dive();
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Render correctly', () => {
    const render = component.findWhere(
      (node) => node.prop('testID') === 'view',
    );
    expect(render.exists()).toBeTruthy();
  });
  test('Title correctly', () => {
    const title = component.findWhere((node) => node.prop('testID') === 'text');
    expect(title.props().children).toEqual(props.title);
  });

});
