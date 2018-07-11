// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import initialProps from './variable/props';
import type {Props} from './types/Props';

let container = document.createElement('div');
if (document.body) {
  document.body.appendChild(container);
}

let props = initialProps;

let setProps = (newProps: Props) => {
  props = {...newProps};
  render();
};

function render() {
  if (document.body) {
    ReactDOM.render(<App property={props} />, container);
  }
}

render();
export default render;
export {setProps};
