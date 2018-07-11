// @flow

export type ToDo = {
  id: number;
  text: string;
  isDone: boolean;
};

export type State = {
  toDo: Array<ToDo>;
  toDoCount: number;
  toDoFilter: Array<ToDo>;
  filterText: string;
};
