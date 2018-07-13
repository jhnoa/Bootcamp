// @flow
import React from 'react';
import RadioGroup from './partial/RadioGroup';
import RadioItem from './partial/RadioItem';
function App() {
  let state = {
    Group: {
      test: ['step', 'down', 'carefully!'],
      now: ['this', 'is', 'clear'],
    },
  };
  let test: Array<React$Element<*>> = [];
  for (let radioName in state.Group) {
    test.push(
      <RadioGroup>
        {React.Children.map(state.Group[radioName], (item: string) => {
          return <RadioItem name={radioName}>{item}</RadioItem>;
        })}
      </RadioGroup>,
    );
  }
  return test;

  // return (
  //   <RadioGroup name="Anon">
  //     <RadioItem name="a">ada</RadioItem>
  //     <RadioItem name="a">di</RadioItem>
  //     <RadioItem name="a">mana</RadioItem>
  //   </RadioGroup>
  // );
}

export default App;
