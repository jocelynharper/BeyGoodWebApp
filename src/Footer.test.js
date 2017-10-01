import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer.js'

test('Footer component should render with GIPHY img/link in the bottom, right corner', () => {
  const component = shallow(<Footer />)
  it(component.contains("https://i.imgur.com/9ML17bb.png").toBe(true))
})
