// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import ProfileScreen from '../ProfileScreen';

describe('LoginScreen', () => {
  it('should render LoginScreen corectly', () => {
    let component = renderer.create(<ProfileScreen />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
