// @flow

import App from './App';
import event from './event';
import type {State} from './types/state';

let state: State = {
  toDo: [
    {id: 0, name: 'buy oreo', isDone: false},
    {id: 1, name: 'buy more snacks', isDone: true},
  ],
  toDoCount: 2,
};

global.eventEmit = (functionName: string, ...arg: Array<string>) => {
  let func = event[functionName];
  if (func) {
    state = event[functionName](state, ...arg);
    render();
  }
};

function render() {
  let html = App(state);
  if (document.body) {
    document.body.innerHTML = html;
  }
}

// render(<App />, container);
render();
