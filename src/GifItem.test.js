import React from 'react';
import { shallow } from 'enzyme';
import Gifitem from './Gifitem.js'

const result = ('<GifItem />', () => {
it('Renders 1 GifItem component', () => {
  const component = shallow(<GifItem />);
  expect(component).toHaveLength(1);
  });
});
