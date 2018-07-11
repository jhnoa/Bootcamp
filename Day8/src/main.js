// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import props from './variable/props';

let container = document.createElement('div');
if (document.body) {
  document.body.appendChild(container);
}

function render() {
  if (document.body) {
    ReactDOM.render(<App property={props} />, container);
  }
}

render();
export default render;
