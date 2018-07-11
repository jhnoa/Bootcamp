// @flow

export type ToDoList = {id: number; name: string; isDone: boolean};
export type State = {toDo: Array<ToDoList>; toDoCount: number};
