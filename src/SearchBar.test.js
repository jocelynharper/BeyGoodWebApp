import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar.js';

/*describe('<SearchBar />', () => {
it('Renders 1 SearchBar component', () => {
  const component = shallow(<SearchBar />);
  expect(component).toHaveLength(1);
  });
});*/

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar />, div);
});

describe('onInputChange', () => {
  it('Should give a list of 10 gifs', () => {
  const testSearchBar = shallow(<SearchBar />);
  const testvalue = 'happy';
  const expected = '';
  const actual = testSearchBar.instance().onInputChange();

  expect(actual).toBe(expected);
})
});
