// @flow
import type {State, ToDoList} from './types/state';
type Event = {
  [name: string]: (State, ...Array<string>) => State;
};

let event: Event = {
  add: (state, ...arg) => {
    let newState = {...state};
    let newTodo: ToDoList = {
      id: newState.toDoCount,
      name: arg[0].toString(),
      isDone: false,
    };
    newState.toDoCount += 1;
    newState.toDo.push(newTodo);
    console.log(newState);
    return newState;
  },

  change: (state, ...arg) => {
    let newState = {...state};
    let boo = newState.toDo[Number(arg[0])].isDone;
    boo = !boo === true;
    newState.toDo[Number(arg[0])].isDone = boo;
    return newState;
  },
};

export default event;
