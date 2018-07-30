import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import style from './style';
import Route from './route';

export default class App extends React.Component {
  render() {
    return <Route />;
  }
}
