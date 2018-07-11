// @flow
import React from 'react';
import type {ToDo} from '../types/State';

type OnToggleDone = (number) => void;

type Props = {
  toDo: ToDo;
  onToggleDone: OnToggleDone;
  isSelected: boolean;
};

const commonStyle = {
  margin: 0,
  padding: 2,
};

const selectedStyle = {
  ...commonStyle,
  backgroundColor: 'black',
  color: 'white',
};

const notSelectedStyle = {
  ...commonStyle,
  backgroundColor: 'transparent',
  color: 'black',
};

export default function ToDoList(props: Props) {
  let {toDo, onToggleDone, isSelected} = props;
  let content = toDo.isDone ? <s>{toDo.text}</s> : toDo.text;
  let style = isSelected ? selectedStyle : notSelectedStyle;
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
