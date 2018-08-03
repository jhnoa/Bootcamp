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

class RepositoryScreen extends Component<Props> {
  render() {
    return (
      <View>
        <Text>To NotificationScreen</Text>
        <Button
          title="Go to NotificationScreen"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('NotificationScreen', {
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

export default RepositoryScreen;
