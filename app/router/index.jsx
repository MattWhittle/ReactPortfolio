import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

var Main = require('Main');
var Home = require('Home');
var Projects = require('Projects');
var Contact = require('Contact');


export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
);
