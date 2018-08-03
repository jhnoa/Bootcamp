// @flow

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import type {
  NavigationScreenProp,
  NavigationStateRoute,
} from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<NavigationStateRoute>;
};

class HomeScreen extends Component<Props> {
  render() {
    return (
      <View>
        <Text>To Profile</Text>
        <Button
          title="Go to Profile"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('ProfileScreen', {
              userID: 86,
            });
          }}
        />
        <Text>To SearchScreen</Text>
        <Button
          title="Go to SearchScreen"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('SearchScreen', {
              userID: 86,
            });
          }}
        />
        <Text>To HomeScreen</Text>
        <Button
          title="Go to HomeScreen"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('HomeScreen', {
              userID: 86,
            });
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;
