/**
 * External dependencies
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';
import 'whatwg-fetch';

/**
 * Internal dependencies
 */
import './App.css';
import PageList from '../PageList';

const App: React.FC = () => {
  return (
    <div className="App conatiner">
      <div className="row">
        <PageList />
      </div>
    </div>
  );
}

export { App };
