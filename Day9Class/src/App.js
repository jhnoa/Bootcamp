// @flow
import React, {Component} from 'react';
import type {State} from './types/State';
import ToDoList from './class/ToDoList';
import NewInputForm from './class/NewInputForm';

class App extends Component<{}, State> {
  state = {
    toDo: [
      {
        id: 0,
        text: 'Do something',
        isDone: false,
      },
      {
        id: 1,
        text: 'Do while',
        isDone: false,
      },
      {
        id: 2,
        text: 'Do For',
        isDone: true,
      },
    ],
    toDoCount: 3,
    toDoFilter: [],
    filterText: '',
  };
  render() {
    let toDo = this.state.filterText
      ? [...this.state.toDoFilter]
      : [...this.state.toDo];
    toDo.sort((x, y) => (x.isDone === y.isDone ? 0 : x.isDone ? 1 : -1));
    return (
      <div>
        <NewInputForm onAdd={this._onAdd} onFilter={this._onFilter} />
        <ul>
          {toDo.map((val) => (
            <ToDoList
              key={val.id}
              toDo={val}
              onToggleDone={this._onToggleDone}
            />
          ))}
        </ul>
      </div>
    );
  }
  _onAdd = (content: string) => {
    this.setState({
      toDo: [
        ...this.state.toDo,
        {id: this.state.toDoCount, text: content, isDone: false},
      ],
      toDoCount: this.state.toDoCount + 1,
    });
  };
  _onFilter = (content: string) => {
    let newToDo = this.state.toDo.filter(
      (val) =>
        val.text.toLowerCase().includes(content.toLowerCase()) ? val : null,
    );
    this.setState({
      toDoFilter: newToDo,
      filterText: content,
    });
  };

  _onToggleDone = (id: number) => {
    let partialState = this.state.toDo.map(
      (val) => (val.id === id ? {...val, isDone: !val.isDone} : val),
    );
    let filteredState = this.state.filterText
      ? this.state.toDoFilter.map(
          (val) => (val.id === id ? {...val, isDone: !val.isDone} : val),
        )
      : [];
    this.setState({toDo: partialState, toDoFilter: filteredState});
  };
}
export default App;
