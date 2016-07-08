var React = require('react');
//ReactDOM is used for rendering to the screen
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');
var ListItem = require('./components/ListItem.jsx');

ReactDOM.render(<List />, document.getElementsById('ingredients'));
