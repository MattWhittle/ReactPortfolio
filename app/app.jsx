var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {browserHistory} = require('react-router');

import router from 'app/router/';

// Load foundation
$(document).ready(function(){
    $(document).foundation();
});

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>
    {router}
  </div>,
  document.getElementById('app')
);
