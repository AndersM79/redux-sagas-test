import React from 'react';
import ReactDOM from 'react-dom';


import App from './app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Home from './components/home';
import About from './components/about';
import Inbox from './components/inbox';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.getElementById('root'));

