import React from 'react';
import { shallow } from 'enzyme';
import GifList from './GifList.js'

test('SearchBar component should render as expected', () => {
  const component = shallow(<GifList />)
  expect(component.contains('Testing a test lol').toBe(true))
})
