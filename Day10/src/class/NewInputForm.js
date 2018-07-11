// @flow

import React, {Component} from 'react';

type Props = {
  onAdd: (content: string) => void;
  onFilter: (content: string) => void;
};

type State = {
  inputValue: string;
  filterValue: string;
};

export default class NewInputForm extends Component<Props, State> {
  state = {
    inputValue: '',
    filterValue: '',
  };

  render() {
    //TODO: move these functions above
    let onChange = (val: Object) => {
      this.setState({inputValue: String(val.target.value)});
    };
    let onClear = () => {
      this.setState({inputValue: ''});
    };
    let onFilter = (val: Object) => {
      this.props.onFilter(String(val.target.value));
      this.setState({filterValue: String(val.target.value)});
    };
    return (
      <div>
        <input
          placeholder="Add Item"
          type="text"
          value={this.state.inputValue}
          onChange={onChange}
        />
        <button
          onClick={() => {
            this.props.onAdd(this.state.inputValue);
          }}
        >
          Save
        </button>
        <button onClick={onClear}>Clear</button>
        <br />
        <input
          placeholder="Filter Item"
          type="text"
          value={this.state.filterValue}
          onChange={onFilter}
        />
      </div>
    );
  }
}
