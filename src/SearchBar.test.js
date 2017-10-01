import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar.js'

describe('<SearchBar />', () => {
it('Renders 1 SearchBar component', () => {
  const component = shallow(<SearchBar />);
  expect(component).toHaveLength(1);
  });
});
