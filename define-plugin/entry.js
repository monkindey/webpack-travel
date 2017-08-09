import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const host = document.getElementById('app');

class HelloReact extends Component {
  render() {
    return <span>Hello React</span>;
  }
}

if (process.env.NODE_ENV !== 'production') {
  console.log('hello');
}

ReactDOM.render(<HelloReact />, host);
