import React from 'react';
import { shallow } from 'enzyme';
import Gifitem from './Gifitem.js'

test('SearchBar component should render as expected', () => {
  const component = shallow(<Gifitem />)
  expect(component.contains('Testing a test lol').toBe(true))
})
