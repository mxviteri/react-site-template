'use strict'

require('bootstrap/dist/css/bootstrap.css');
require('./styles/main.scss');

const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('./router.jsx');

ReactDOM.render(<Router />, document.getElementById('container'));
