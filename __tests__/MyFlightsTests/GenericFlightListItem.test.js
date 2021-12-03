import React from 'react';
import {shallow} from 'enzyme';
import GenericListItem from '../../src/components/atoms/MyFlightsAtoms/GenericFlightListItem';
import {styles} from '../../src/styles/MyFlightsStyles';

describe('Renders correctly when there is no icon', () => {
  const props = {
    ContainerStyle: styles.topContainer,
    Title: 'title',
    Subtitle: 'subtitle',
    TitleFont: styles.country,
    SubtitleFont: styles.country,
    Icon: null,
  };
  const wrapper = shallow(<GenericListItem {...props} />);

  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Render correctly', () => {
    const render = wrapper.findWhere((node) => node.prop('testID') === 'view');
    expect(render.exists()).toBeTruthy();
  });
  test('When there is no icon', () => {
    const icon = wrapper.findWhere((node) => node.prop('testID') === 'icon');
    expect(icon.exists()).not.toBeTruthy();
  });
});

describe('Icon When there is icon', () => {
  const props = {
    ContainerStyle: styles.topContainer,
    Title: 'title',
    Subtitle: 'subtitle',
    TitleFont: styles.country,
    SubtitleFont: styles.country,
    Icon: 'plane',
  };
  const wrapper = shallow(<GenericListItem {...props} />);
  test('When there is icon', () => {
    const icon = wrapper.findWhere((node) => node.prop('testID') === 'icon');
    expect(icon.exists()).toBeTruthy();
  });
  
});
