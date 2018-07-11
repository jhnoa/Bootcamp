// @flow
import React, {Component} from 'react';
import type {State, ToDo} from './types/State';
import ToDoList from './class/ToDoList';
import NewInputForm from './class/NewInputForm';

class App extends Component<{}, State> {
  constructor(arg: Object) {
    super(...arg);
    this.state = {
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
      selectedToDo: 0,
      toDoFilter: [
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
      filterText: '',
    };
  }

  indexChecker = (number: number) => {
    let min = 0;
    let max = this.state.toDoFilter.length
      ? this.state.toDoFilter.length - 1
      : 0;
    let result = number > max ? max : number < min ? min : number;
    return result;
  };

  keyDownListener = (event: KeyboardEvent) => {
    let {selectedToDo, toDoFilter} = this.state;
    let index = selectedToDo;
    if (event.key === 'ArrowUp') {
      index = index - 1;
    } else if (event.key === 'ArrowDown') {
      index = index + 1;
    } else if (event.key === ' ') {
      this._onToggleDone(toDoFilter[index].id);
    }
    index = this.indexChecker(index);
    this.setState({selectedToDo: index});
  };

  componentDidMount() {
    document.addEventListener('keydown', this.keyDownListener);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownListener);
  }

  render() {
    let toDo = this.state.toDoFilter;

    return (
      <div>
        <NewInputForm onAdd={this._onAdd} onFilter={this._onFilter} />
        <ul style={{listStyle: 'none', margin: 0, padding: 2}}>
          {toDo.map((val, index) => (
            <ToDoList
              key={val.id}
              toDo={val}
              onToggleDone={this._onToggleDone}
              isSelected={index === this.state.selectedToDo}
            />
          ))}
        </ul>
      </div>
    );
  }
  _updateFilter = (props?: Array<ToDo>) => {
    let toDo = props ? props : this.state.toDo;
    let newFilter = this.state.filterText
      ? toDo.filter(
          (val) =>
            val.text.toLowerCase().includes(this.state.filterText.toLowerCase())
              ? val
              : null,
        )
      : toDo;
    //SORT
    let result = newFilter.filter((val) => (!val.isDone ? true : false));
    result.push(...newFilter.filter((val) => (val.isDone ? true : false)));

    return result;
  };
  _onAdd = (content: string) => {
    let newToDo = [
      ...this.state.toDo,
      {id: this.state.toDoCount, text: content, isDone: false},
    ];
    let newFilter = this._updateFilter(newToDo);
    this.setState({
      toDo: newToDo,
      toDoFilter: newFilter,
      toDoCount: this.state.toDoCount + 1,
    });
  };
  _onFilter = (content: string) => {
    let newToDo = this._updateFilter();
    this.setState({
      toDoFilter: newToDo,
      filterText: content,
    });
  };
  _onToggleDone = (id: number) => {
    let partialState = this.state.toDo.map(
      (val) => (val.id === id ? {...val, isDone: !val.isDone} : val),
    );
    let filteredState = this._updateFilter(partialState);
    this.setState({toDo: partialState, toDoFilter: filteredState});
  };
}
export default App;
