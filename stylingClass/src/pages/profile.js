// @flow
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from '../style';

export default class profile extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name', 'A Nested Details Screen'),
      // title: 'Profile',
    };
  };
  render() {
    return <View />;
  }
}
