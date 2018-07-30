// @flow

import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import home from './pages/home';
import profile from './pages/profile';
let route = createStackNavigator(
  {
    Home: home,
    Profile: profile,
  },
  {
    initialRouteName: 'Home',
  },
);

export default route;
