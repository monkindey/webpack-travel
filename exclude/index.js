import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const host = document.getElementById('app');

class HelloReact extends Component {
  render() {
    return <span>Hello React</span>;
  }
}

ReactDOM.render(<HelloReact />, host);
