'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PageHeader = require('../shared/header/index.jsx');
const PageFooter = require('../shared/footer/index.jsx');

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageHeader />
        <div>
          <h1>Site Title</h1>
        </div>
        <PageFooter />
      </div>
    );
  }
}

module.exports = Home;
