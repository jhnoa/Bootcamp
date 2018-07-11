// @flow

export type ToDoList = {
  id: number;
  text: string;
  isDone: boolean;
};

export type Props = {
  ToDoList: Array<ToDoList>;
  ToDoText: string;
  ToDoFilter: string;
};
