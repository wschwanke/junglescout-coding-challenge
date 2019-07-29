import React from 'react';
import ReactDOM from 'react-dom';
import { PageList } from './PageList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
