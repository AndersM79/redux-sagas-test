import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import storeConfiguration from './store/store-configuration';

export const store = storeConfiguration(window.__INITIAL_STATE__);

export default React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
})
