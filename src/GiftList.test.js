import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './GifList.js'
import renderer from 'react-test-renderer';


it('Div renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GifList />, div);
});

it('Image renders correctly', () => {
  const tree = renderer.create(
    <Link page="http://www.facebook.com">facebook</Link>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
