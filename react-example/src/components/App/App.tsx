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
    <div className="App container">
      <div className="row">
        <h1 className="col-12">This page list works</h1>
        <PageList route="/pages" />
      </div>
      <div className="row">
        <h1 className="col-12">This page list throws an error</h1>
        <PageList route="/page2s" />
      </div>
    </div>
  );
}

export { App };
