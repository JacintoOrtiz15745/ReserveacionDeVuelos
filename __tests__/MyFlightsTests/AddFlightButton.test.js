import React from 'react'
import {shallow} from 'enzyme'
import AddFlightButton from '../../src/components/atoms/MyFlightsAtoms/AddFlightButton'

describe('Render correctly', () => {
    const wrapper = shallow(<AddFlightButton/>)
    test('snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });
    test('Render correctly', () =>{
        const render = wrapper.findWhere((node) => node.prop('testID') === 'view');
        expect(render.exists()).toBeTruthy()
    })

})

