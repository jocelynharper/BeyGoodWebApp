import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import GifItem from './Gifitem.js'

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GifItem />, div);
});

it('renders correctly', () => {
  const tree = renderer.create(
    <img src={image.gif.images.downsized.url} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

/*const result = ('<GifItem />', () => {
it('Renders 1 GifItem component', () => {
  const component = shallow(<GifItem />);
  expect(component).toHaveLength(1);
  });
});*/
