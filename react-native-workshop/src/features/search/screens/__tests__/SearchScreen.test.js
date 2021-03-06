// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import SearchScreen from '../SearchScreen';

describe('LoginScreen', () => {
  it('should render LoginScreen corectly', () => {
    let component = renderer.create(<SearchScreen />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
