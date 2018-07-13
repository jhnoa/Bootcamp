// @flow
import React from 'react';

type Props = {
  name: string;
  children?: Array<React$Element<*>>;
};

let RadioItem = (props: Props) => {
  return [
    <input type="radio" name={props.name} />,
    ...React.Children.toArray(props.children),
  ];
};

export default RadioItem;
