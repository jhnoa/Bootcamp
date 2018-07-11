// @flow
import type {State} from './types/state';

function showToDoList(state) {
  let result = '';
  for (let {id, name, isDone} of state.toDo) {
    if (isDone) {
      result += `<p id=${id} onclick="eventEmit('change',this.id)"><s>${name}</s></p>`;
    } else {
      result += `<p id=${id} onclick="eventEmit('change',this.id)">${name}</p>`;
    }
  }
  return result;
}

function App(state: State): string {
  let input = `<textarea id="input"></textarea>`;
  let button = `<button onclick="eventEmit('add',document.getElementById('input').value)">Add</button>`;
  let head = input + button;
  let foot = showToDoList(state);
  let html = head + foot;
  return html;
}

export default App;
