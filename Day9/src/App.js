// @flow
// import React from 'react';
import type {Props} from './types/Props';
import ShowToDoList from './partial/ShowToDoList';

type InputProps = {
  property: Props;
};

function App({property}: InputProps) {
  return ShowToDoList(property);
}

export default App;
