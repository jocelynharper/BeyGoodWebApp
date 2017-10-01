import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer.js'

test('SearchBar component should render as expected', () => {
  const component = shallow(<Footer />)
  expect(component.contains('Testing a test lol').toBe(true))
})
