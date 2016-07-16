var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// same as 'var Route = require('react-route').Route;' for all elements

var TodoApp = require('TodoApp');

// Load foundation
$(document).foundation();

// App scss
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
