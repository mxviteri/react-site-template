'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Woah.. this page doesn't exist yet!</h1>
    );
  }
}

module.exports = NotFound;
