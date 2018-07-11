//@flow
import React from 'react';
import type {Props, ToDoList} from '../types/Props';
import render from '../main';

type InputToDoList = {
  item: ToDoList;
};

let EachToDoList = ({item}: InputToDoList) => {
  if (item.isDone) {
    return (
      <li
        onClick={() => {
          item.isDone = !item.isDone;
          render();
        }}
      >
        <s>{item.text}</s>
      </li>
    );
  } else {
    return (
      <li
        onClick={() => {
          item.isDone = !item.isDone;
          render();
        }}
      >
        {item.text}
      </li>
    );
  }
};

let ShowToDoList = ({ToDoList}: Props) => {
  console.log(ToDoList);
  let head = [
    <textarea id="input"> </textarea>,
    <button
      onClick={() => {
        ToDoList.push({
          text: String(document.getElementById('input').value),
          isDone: false,
        });
        render();
      }}
    >
      Save
    </button>,
  ];
  let foot = <ul>{ToDoList.map((item) => <EachToDoList item={item} />)}</ul>;
  return [head, foot];
};

export default ShowToDoList;
