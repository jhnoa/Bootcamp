//@flow
import React from 'react';
import type {Props, ToDoList} from '../types/Props';
import {setProps} from '../main';

let RenderInput = (props: Props) => {
  let onChange = (obj: Object) => {
    setProps({...props, ToDoText: obj.target.value});
  };
  let onClick = () => {
    let newProps = {
      ...props,
      ToDoList: [
        ...props.ToDoList,
        {
          id: Math.random(),
          text: String(props.ToDoText),
          isDone: false,
        },
      ],
      ToDoText: '',
    };
    setProps(newProps);
  };
  let onClear = () => {
    setProps({...props, ToDoText: ''});
  };
  return [
    <input
      type="text"
      value={props.ToDoText}
      onChange={onChange}
      placeholder="Add Item..."
      id="input"
    />,
    <button onClick={onClick}>Save</button>,
    <button onClick={onClear}>Clear</button>,
  ];
};

let RenderFilter = (props: Props) => {
  let onChange = (obj) => {
    setProps({...props, ToDoFilter: obj.target.value});
  };
  return [
    <br />,
    <input
      type="text"
      value={props.ToDoFilter}
      onChange={onChange}
      placeholder="Filter Item..."
    />,
  ];
};

type InputToDoList = {
  props: Props;
  item: ToDoList;
  id: number;
};

let EachToDoList = ({item, id, props}: InputToDoList) => {
  let content = item.isDone ? <s>{item.text}</s> : item.text;
  //console.log('todolist', props.ToDoList);

  let onClick = () => {
    let s = props.ToDoList.map((obj) => {
      if (obj === item) {
        let newObj = {...obj, isDone: !obj.isDone};
        return newObj;
      } else {
        return obj;
      }
    });
    setProps({
      ...props,
      ToDoList: [...s],
    });
  };
  return (
    <li key={item.id} onClick={onClick}>
      {content}
    </li>
  );
};

let RenderToDoList = (props: Props) => {
  let filter = props.ToDoFilter;
  let toDoList = [];

  let filterFunction = (list) =>
    list.filter(({text}) => text.toLowerCase().includes(filter.toLowerCase()));

  toDoList = filter ? filterFunction([...props.ToDoList]) : [...props.ToDoList];

  let showList = (item) => (
    <EachToDoList id={item.id} item={item} props={props} />
  );

  let notDone = toDoList.map((item) => (!item.isDone ? showList(item) : ''));
  let done = toDoList.map((item) => (item.isDone ? showList(item) : ''));
  let content = [notDone, done];
  return <ul>{content}</ul>;
};

let ShowToDoList = (props: Props) => {
  let head = [RenderInput(props), RenderFilter(props)];
  let foot = RenderToDoList(props);
  return [head, foot];
};

export default ShowToDoList;
