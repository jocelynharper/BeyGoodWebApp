import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar.js'

test('works', () => {
  const component = shallow(<SearchBar />)
  expect(component(1).toql(2))
})
