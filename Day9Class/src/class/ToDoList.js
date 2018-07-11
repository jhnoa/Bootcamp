// @flow
import React from 'react';
import type {ToDo} from '../types/State';

type OnToggleDone = (number) => void;

type Props = {
  toDo: ToDo;
  onToggleDone: OnToggleDone;
};

const commonStyle = {
  margin: 0,
  padding: 2,
  backgroundColor: 'transparent',
  color: 'black',
};

export default function ToDoList(props: Props) {
  let {toDo, onToggleDone} = props;
  let content = toDo.isDone ? <s>{toDo.text}</s> : toDo.text;
  let style = commonStyle;
  return (
    <li
      onClick={() => {
        onToggleDone(toDo.id);
      }}
      style={style}
    >
      {content}
    </li>
  );
}
