'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class PageFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <h2>Sample Footer</h2>
        <p>Here's a sample footer using: <i>react-site-template</i></p>
      </div>
    );
  }
}

module.exports = PageFooter;
