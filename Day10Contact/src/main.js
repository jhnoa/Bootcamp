// @flow
import React from 'react';
import App from './App';
import {render} from 'react-dom';

let container = document.createElement('div');
container.style.paddingTop = '5vh';
container.style.paddingBottom = '5vh';
container.style.paddingLeft = '5vw';
container.style.paddingRight = '5vw';
container.style.height = '90vh';
if (document.body) {
  document.body.appendChild(container);
}

render(<App accountName={'Johan'} />, container);
