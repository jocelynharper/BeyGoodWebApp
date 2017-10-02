import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer.js'

/*test('Footer component should render with GIPHY img/link in the bottom, right corner', () => {
  const component = shallow(<Footer />)
  it(component.contains("https://i.imgur.com/9ML17bb.png").toBe(true))
})*/

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});
