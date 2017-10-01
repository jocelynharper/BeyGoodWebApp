import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar.js'

test('SearchBar component should render as expected', () => {
  const component = shallow(<SearchBar />)
  expect(component.contains('Testing a test lol').toBe(true))
})
