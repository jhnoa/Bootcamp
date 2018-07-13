// @flow

import React from 'react';
type Props = {
  children?: Array<React$Element<*>>;
};

let RadioGroup = (props: Props) => {
  return React.Children.count(props.children) > 0 ? (
    <div>
      {React.Children.map(props.children, (element: React$Element<*>) => {
        return [element, <br />];
      })}
    </div>
  ) : (
    []
  );
};

export default RadioGroup;
