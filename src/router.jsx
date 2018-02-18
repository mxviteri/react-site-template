'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;
const Home = require('./pages/home/index.jsx');
const NotFound = require('./pages/shared/404/index.jsx');

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='*' component={NotFound} />
      </Router>
    );
  }
}

module.exports = AppRouter;
